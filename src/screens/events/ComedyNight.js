import React, {useContext, useState, useEffect} from 'react';
import tw from 'twin.macro';
import {useLocation} from "react-router-dom";
import moment from "moment";

import EventsContext from "../../context/eventsContext";

import Tag from "../../components/ui/Tag";
import YouTubeButton from '../../components/ui/YouTubeButton';

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg`;
const Body = tw.div`my-2 mb-8`;
const P = tw.p`my-2`;

export default () => {
    const {events} = useContext(EventsContext);
    const location = useLocation();
    const event = events.filter(item => `/event/${item.path}` === location.pathname)[0];
    const url = "https://www.youtube.com/watch?v=hlfK-AFV8JU";
    const release = () => {return moment("2020-09-30 19:00:00").isBefore()};
    const [live, setLive] = useState(release());

    if(!release()) {
        const interval = setInterval(() => {
            if(release()) {
                setLive(true);
                clearInterval(interval)
            }
        }, 10000);
    }

    return (
        <Frame>
            <Container>
                <Title>{event?.title}</Title>
                <Body>
                    <P>
                    {event?.description}
                    </P>

                    {live ? <YouTubeButton onClick={() => window.open(url, "_blank")}/> : <P>The link to watch will be available at 7pm!</P>}

                </Body>

                {event?.tags?.map((tag,i) => (
                    <Tag key={i}>{tag}</Tag>
                ))}
            </Container>
        </Frame>
  );
}
