import React, {useContext} from 'react';
import tw from 'twin.macro';
import {useLocation} from "react-router-dom";

import EventsContext from "../../context/eventsContext";

import TeamsButton from "../../components/ui/TeamsButton";
import Tag from "../../components/ui/Tag";

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg`;
const Body = tw.div`flex flex-col`;

export default () => {
    const {events} = useContext(EventsContext);
    const location = useLocation();

    const event = events.filter(item => `/event/${item.path}` === location.pathname)[0];
    const url = "https://eur02.safelinks.protection.outlook.com/ap/t-59584e83/?url=https%3A%2F%2Fteams.microsoft.com%2Fl%2Fmeetup-join%2F19%253ameeting_NDUzNTI4ZTMtNDYzMS00N2U2LWJjMmUtOGZlMmViNjExZTZk%2540thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%25229c9bcd11-977a-4e9c-a9a0-bc734090164a%2522%252c%2522Oid%2522%253a%25221e7b4c3d-880e-41fd-8c49-e1fcd9c085d7%2522%257d&data=02%7C01%7Cf.benjamin%40lancaster.ac.uk%7C9fb8487a3bc64dc5dba008d863c21d34%7C9c9bcd11977a4e9ca9a0bc734090164a%7C0%7C0%7C637369032643880542&sdata=UhlNpcMNsyJrS64uXqVe6Gp6rljHrt%2BMgPfD3bSbQ0c%3D&reserved=0";

    return (
        <Frame>
            <Container>
                <Title>{event?.title}</Title>
                <Body>
                    {event?.description}
                    <br/>
                    <br/>
                    Click the link below at 19:00 to join the event.
                    <TeamsButton onClick={() => window.open(url, "_blank")}/>
                </Body>

                {event?.tags?.map((tag,i) => (
                    <Tag key={i}>{tag}</Tag>
                ))}
            </Container>
        </Frame>
  );
}
