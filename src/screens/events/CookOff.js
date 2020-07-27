import React, {useContext} from 'react';
import tw from 'twin.macro';
import {useLocation} from "react-router-dom";

import EventsContext from "../../context/eventsContext";

import Tag from "../../components/ui/Tag";

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg`;
const Body = tw.p`my-2 mb-8`;

export default () => {
    const {events} = useContext(EventsContext);
    const location = useLocation();

    return (
        <Frame>
            <Container>
                <Title>JCR Cook-Off</Title>
                <Body>
                    <iframe title="Billie's Easy Fajitas" width="100%" height="315" src="https://www.youtube.com/embed/1yTg81-tULQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Body>

                {events.filter(item => `/event/${item.path}` === location.pathname)[0]?.tags?.map((tag,i) => (
                    <Tag key={i}>{tag}</Tag>
                ))}
            </Container>
        </Frame>
  );
}
