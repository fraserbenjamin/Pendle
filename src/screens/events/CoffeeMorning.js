import React, {useContext} from 'react';
import tw from 'twin.macro';
import {useLocation} from "react-router-dom";

import EventsContext from "../../context/eventsContext";

import Tag from "../../components/ui/Tag";
import {useAnalytics} from "../../components/Firebase";
import TeamsButton from '../../components/ui/TeamsButton';

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg`;
const Body = tw.div`my-2 mb-8`;
const P = tw.p`my-2`;

export default () => {
    const {events} = useContext(EventsContext);
    const location = useLocation();
    const analytics = useAnalytics();
    const event = events.filter(item => `/event/${item.path}` === location.pathname)[0];
    const url = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZGIyM2UyNmYtODFmYy00MjhiLThkNjAtYzU5ZGViNDFhNGIz%40thread.v2/0?context=%7b%22Tid%22%3a%229c9bcd11-977a-4e9c-a9a0-bc734090164a%22%2c%22Oid%22%3a%22060abbfb-a20f-4e29-bb63-f8935f87618a%22%7d";

    analytics.logEvent('page_view', {
        page_title: 'Coffee Morning',
    });

    return (
        <Frame>
            <Container>
                <Title>Welfare Team Coffee Morning</Title>
                <Body>
                    <P>
                    {event?.description}
                    </P>

                    <TeamsButton onClick={() => window.open(url, "_blank")}/>
                </Body>

                {event?.tags?.map((tag,i) => (
                    <Tag key={i}>{tag}</Tag>
                ))}
            </Container>
        </Frame>
  );
}
