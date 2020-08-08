import React, {useContext, useState} from 'react';
import tw from 'twin.macro';
import {useLocation} from "react-router-dom";

import EventsContext from "../../context/eventsContext";
import YouTubePopup from "../../components/YouTubePopup";

import Tag from "../../components/ui/Tag";

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg mb-1`;
const Body = tw.div`font-normal pt-3 text-lg mb-5`;
const Tags = tw.div`mt-5`;

export default () => {
    const {events} = useContext(EventsContext);
    const location = useLocation();
    const [active, setActive] = useState(null);

    const baseStyle = {cursor: "pointer"}
    const style1 = {...baseStyle, fill: "#a3ba2e"};
    const style2 = {...baseStyle, fill: "#c10075"};
    const style3 = {...baseStyle, fill: "#be011f"};
    const style4 = {...baseStyle, fill: "#6484bf"};

    const text = {fontSize: "10px", fill: "white", fontWeight: "300", fontFamily:"Effra", userSelect: "none", pointerEvents: "none"};

    return (
        <Frame>
            <Container>
                <Title>Society Showcase</Title>
                <Body>Click on a stall to see a highlight video from the society</Body>

                {active && <YouTubePopup id={active.id} close={() => setActive(null)}/>}

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 327 268">
                    <rect style={style1} x="60" width="40" height="40" onClick={() => setActive({name: "Barbell", id: "GcvUPdTmmJU"})}/>
                    <rect style={style1} x="102" width="40" height="40" onClick={() => setActive({name: "Canoe", id: "uyge7sz5hVk"})}/>
                    <rect style={style1} x="60" y="42" width="82" height="40" onClick={() => setActive({name: "Volleyball", id: "0KOXooxrEUU"})}/>
                    <polygon style={style1} points="100 166 72 166 60 84 100 84 100 166" onClick={() => setActive({name: "Mountaineering", id: "iH7PNAj2t8Q"})}/>
                    <rect style={style1} x="102" y="84" width="40" height="40" />
                    <rect style={style1} x="102" y="126" width="40" height="40" />
                    <rect style={style2} x="42" y="186" width="40" height="40" />
                    <rect style={style3} x="102" y="186" width="40" height="40" />
                    <rect style={style2} y="186" width="40" height="40" />
                    <rect style={style3} x="102" y="228" width="82" height="40" />
                    <polygon style={style3} points="226 226 144 226 144 186 186 186 226 226" />
                    <rect style={style3} x="186" y="228" width="40" height="40" />
                    <polygon style={style4} points="244 166 203 166 162 126 244 126 244 166" />
                    <rect style={style4} x="246" y="126" width="40" height="40" />
                    <rect style={style4} x="162" y="42" width="40" height="82" />
                    <rect style={style4} x="162" width="40" height="40" />
                    <rect style={style4} x="204" y="42" width="40" height="40" />
                    <rect style={style4} x="204" width="40" height="40" />
                    <rect style={style4} x="246" width="40" height="40" />
                    <rect style={style2} x="245" y="228" width="40" height="40" />
                    <rect style={style2} x="287" y="228" width="40" height="40" />
                    <polygon style={style2} points="285 186 285 226 245 226 245 201 260 186 285 186" />
                    <rect style={style2} x="287" y="186" width="40" height="40" />
                    <rect style={style2} y="228" width="82" height="40" />
                    <polygon style={style4} points="246 82 246 42 286 42 286 67 271 82 246 82" />

                    <text style={text} transform="translate(65.57 24.14)">Barbell</text>
                    <text style={text} transform="translate(107.8 24.01)">Canoe</text>
                    <text style={text} transform="translate(80 65)">Volleyball</text>
                    <text style={text} transform="translate(87.42 160) rotate(-90)">Mountaineering</text>
                </svg>

                <Tags>
                    {events.filter(item => `/event/${item.path}` === location.pathname)[0]?.tags?.map((tag,i) => (
                        <Tag key={i}>{tag}</Tag>
                    ))}
                </Tags>
            </Container>
        </Frame>
  );
}
