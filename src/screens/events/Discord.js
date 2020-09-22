import React, {useContext} from 'react';
import tw from 'twin.macro';
import {useLocation} from "react-router-dom";

import EventsContext from "../../context/eventsContext";

import Tag from "../../components/ui/Tag";
import {useAnalytics} from "../../components/Firebase";
import DiscordButton from '../../components/ui/DiscordButton';

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
    const url = "https://discord.gg/Mf8snd";

    analytics.logEvent('page_view', {
        page_title: 'Discord',
    });

    return (
        <Frame>
            <Container>
                <Title>Discord Games Night</Title>
                <Body>
                    <P>
                    {event?.description}
                    </P>

                    <DiscordButton onClick={() => window.open(url, "_blank")}/>
                    <div tw="font-medium text-center mt-3">{url}</div>
                </Body>

                {event?.tags?.map((tag,i) => (
                    <Tag key={i}>{tag}</Tag>
                ))}
            </Container>
        </Frame>
  );
}
