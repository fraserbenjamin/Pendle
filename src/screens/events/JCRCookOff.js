import React, {useContext} from 'react';
import tw, {styled} from 'twin.macro';
import {useLocation} from "react-router-dom";

import EventsContext from "../../context/eventsContext";

import Tag from "../../components/ui/Tag";
import Billie from "../../assets/events/cook-off/billie.png";
import Simon from "../../assets/events/cook-off/simon.png";

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg`;
const Download = tw.a`bg-pendle-green text-lg shadow-md rounded text-white py-2 px-5 m-2`;
const Body = styled.div`
    ${tw`mt-2 mb-8 grid`}
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

    @media (max-width: 348px) {
        ${tw`flex flex-col`}
    }
`;
const Iframe = tw.iframe`p-2`;

export default () => {
    const {events} = useContext(EventsContext);
    const location = useLocation();

    return (
        <Frame>
            <Container>
                <Title>JCR Cook-Off</Title>
                <Body>
                    <Iframe title="Billie's Easy Fajitas" width="100%" height="315" src="https://www.youtube.com/embed/1yTg81-tULQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
                    <Iframe title="Yifei's Strawberry Croissants" width="100%" height="315" src="https://www.youtube.com/embed/0OYdMhk1tXA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
                    <Iframe title="Simon's Stir-Fry" width="100%" height="315" src="https://www.youtube.com/embed/as88MOYKLes" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
                </Body>

                <div tw="font-bold text-2xl ml-3">Download Recipes</div>
                <div tw="flex flex-wrap mb-5">
                    <Download href={Billie} download="Billie's Easy Fajitas">
                        Billie's Easy Fajitas
                    </Download>
                    <Download href={Simon} download="Simon's Stir Fry">
                        Simon's Stir-Fry
                    </Download>
                </div>

                {events.filter(item => `/event/${item.path}` === location.pathname)[0]?.tags?.map((tag,i) => (
                    <Tag key={i}>{tag}</Tag>
                ))}
            </Container>
        </Frame>
  );
}
