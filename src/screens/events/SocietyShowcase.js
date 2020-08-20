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



                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453 328">
                    {/* <rect style={style1} x="60" width="40" height="40" onClick={() => setActive({name: "Barbell", id: "GcvUPdTmmJU"})}/>
                    <rect style={style1} x="102" width="40" height="40" onClick={() => setActive({name: "Canoe", id: "uyge7sz5hVk"})}/>
                    <rect style={style1} x="60" y="42" width="82" height="40" onClick={() => setActive({name: "Volleyball", id: "0KOXooxrEUU"})}/>
                    <polygon style={style1} points="100 166 72 166 60 84 100 84 100 166" onClick={() => setActive({name: "Mountaineering", id: "iH7PNAj2t8Q"})}/>
                    <rect style={style1} x="102" y="84" width="40" height="40" onClick={() => setActive({name: "Badminton", id: "TRtdBbLF_SY"})}/> */}

                    {/* Top Green Zone */}
                    <rect style={style1} x="144" width="40" height="40" onClick={() => setActive({name: "Barbell", id: "GcvUPdTmmJU"})}/>
                    <rect style={style1} x="186" width="40" height="40" onClick={() => setActive({name: "Canoe", id: "uyge7sz5hVk"})}/>
                    <rect style={style1} x="144" y="42" width="82" height="40" onClick={() => setActive({name: "Volleyball", id: "0KOXooxrEUU"})}/>
                    <polygon style={style1} points="184 166 156 166 144 84 184 84 184 166" onClick={() => setActive({name: "Mountaineering", id: "iH7PNAj2t8Q"})}/>
                    <rect style={style1} x="186" y="84" width="40" height="40" onClick={() => setActive({name: "Badminton", id: "TRtdBbLF_SY"})}/>
                    <rect style={style1} x="186" y="126" width="40" height="40" onClick={() => setActive({name: "Fencing", id: "4bgsvXtx9G4"})}/>

                    {/* Purple Zone */}
                    <rect style={style2} x="126" y="186" width="40" height="40" onClick={() => setActive({name: "LA1TV", id: "ChhIwLt_q5s"})}/>
                    <rect style={style2} x="186" y="186" width="40" height="40" onClick={() => setActive({name: "Parkour", id: "_D86UnuAi2A"})}/>
                    <rect style={style2} x="84" y="186" width="40" height="40" onClick={() => setActive({name: "Trampolining", id: "uku-0rHNZGk"})}/>
                    <rect style={style2} x="186" y="228" width="82" height="40" onClick={() => setActive({name: "Bailrigg FM", id: "OFRTPJo9cK8"})}/>
                    <polygon style={style2} points="310 226 228 226 228 186 270 186 310 226" onClick={() => setActive({name: "American Football", id: "U5JVw15zKBc"})}/>
                    <rect style={style2} x="270" y="228" width="40" height="40" onClick={() => setActive({name: "Hiking", id: "3YbwAMkBiYE"})}/>
                    <polygon style={style3} points="327 166 286.5 166 246 126 327 126 327 166" onClick={() => setActive({name: "Harry Potter", id: "rutHQPEwGfk"})}/>
                    <rect style={style3} x="329" y="126" width="40" height="40" onClick={() => setActive({name: "Ballroom Dancing", id: "lD-cyltQWaU"})}/>
                    <rect style={style3} x="246" y="42" width="40" height="82" onClick={() => setActive({name: "Precious Plastics", id: "_5uMj5McjSw"})}/>
                    <rect style={style3} x="246" width="40" height="40" onClick={() => setActive({name: "Boxing", id: "6zTLgFij0VA"})}/>
                    <rect style={style3} x="288" y="42" width="40" height="40" onClick={() => setActive({name: "LUSing", id: "8ZuZuLZVx-M"})}/>
                    <rect style={style3} x="288" width="40" height="40" onClick={() => setActive({name: "Women's Cricket Club", id: "WgaYkHPipqc"})}/>
                    <rect style={style3} x="330" width="40" height="40" onClick={() => setActive({name: "Photosoc", id: "1nBIqoWFULk"})}/>
                    <rect style={style4} x="329" y="228" width="40" height="40" onClick={() => setActive({name: "Women's Football", id: "p1wFm9yl8QQ"})}/>
                    <rect style={style4} x="371" y="228" width="40" height="40" onClick={() => setActive({name: "Debating", id: "hBZLyXGrxi4"})}/>
                    <polygon style={style4} points="369 186 369 226 329 226 329 201 344 186 369 186" onClick={() => setActive({name: "", id: ""})}/> {/*Missed Out*/}
                    <rect style={style4} x="371" y="186" width="40" height="40" onClick={() => setActive({name: "K Pop", id: "DmV0e0Oqb6k"})}/>
                    <rect style={style2} x="84" y="228" width="82" height="40" onClick={() => setActive({name: "Korfball", id: "hJNVDiw8nGg"})}/>
                    <polygon style={style3} points="330 82 330 42 370 42 370 67 355 82 330 82" onClick={() => setActive({name: "Boat Club", id: "tgsdV7pWyUE"})}/>
                    <rect style={style2} y="228" width="40" height="40" onClick={() => setActive({name: "Rugby Union", id: "Xx2W009ReUc"})}/>
                    <rect style={style2} x="42" y="228" width="40" height="40" onClick={() => setActive({name: "Sailing", id: "tO_GVcXvr6Q"})}/>
                    <polygon style={style2} points="40 186 40 226 0 226 0 201 15 186 40 186" onClick={() => setActive({name: "Waterpolo", id: "NMbkXmHh47c"})}/>
                    <rect style={style2} x="42" y="186" width="40" height="40" onClick={() => setActive({name: "Shooting", id: "Af-lcD7F9tE"})}/>
                    <polygon style={style4} points="84 166 84 126 124 126 124 151 109 166 84 166" onClick={() => setActive({name: "Pole Fitness", id: "gJpgs3AfGcg"})}/>
                    <rect style={style4} x="42" y="126" width="40" height="40" onClick={() => setActive({name: "Women's Lacrosse", id: "r2hP7F8XrUk"})}/>
                    <rect style={style4} y="126" width="40" height="40" onClick={() => setActive({name: "Benchball", id: "UHHHLj_qrt8"})}/>
                    <rect style={style4} x="42" y="84" width="82" height="40" onClick={() => setActive({name: "Squash", id: "NKV1ucr7-nM"})}/>
                    <rect style={style4} y="42" width="40" height="82" onClick={() => setActive({name: "Craft", id: "T_rbftjM1R8"})}/>
                    <rect style={style4} x="42" y="42" width="40" height="40" onClick={() => setActive({name: "Culture", id: "y-gjPS9EBOY"})}/>
                    <rect style={style4} x="42" width="40" height="40" onClick={() => setActive({name: "Cheerleading", id: "l97GYDJ0UQE"})}/>
                    <rect style={style4} width="40" height="40" onClick={() => setActive({name: "Men's Lacrosse", id: "ez2Pis-S_yc"})}/>
                    <rect style={style4} x="413" y="228" width="40" height="40" onClick={() => setActive({name: "", id: ""})}/>
                    <rect style={style4} x="413" y="186" width="40" height="40" onClick={() => setActive({name: "", id: ""})}/>
                    <rect style={style3} x="371" y="126" width="40" height="40" onClick={() => setActive({name: "", id: ""})}/>
                    <rect style={style3} x="413" y="126" width="40" height="40" onClick={() => setActive({name: "", id: ""})}/>
                    <polygon style={style4} points="124 40 84 40 84 0 109 0 124 15 124 40" onClick={() => setActive({name: "", id: ""})}/>
                    <polygon style={style3} points="453 84 412 84 371 124 453 124 453 84" onClick={() => setActive({name: "", id: ""})}/>
                    <rect style={style1} x="52" y="288" width="40" height="40" onClick={() => setActive({name: "", id: ""})}/>
                    <rect style={style1} x="94" y="288" width="40" height="40" onClick={() => setActive({name: "", id: ""})}/>
                    <rect style={style1} x="136" y="288" width="82" height="40" onClick={() => setActive({name: "", id: ""})}/>
                    <rect style={style1} x="220" y="288" width="40" height="40" onClick={() => setActive({name: "", id: ""})}/>
                    <polygon style={style1} points="10 288 50 288 50 328 25 328 10 313 10 288" onClick={() => setActive({name: "", id: ""})}/>
                    <rect style={style1} x="280" y="288" width="40" height="40" onClick={() => setActive({name: "", id: ""})}/>
                    <rect style={style1} x="322" y="288" width="40" height="40" onClick={() => setActive({name: "", id: ""})}/>
                    <rect style={style1} x="364" y="288" width="40" height="40" onClick={() => setActive({name: "", id: ""})}/>
                    <polygon style={style1} points="406 328 406 288 446 288 446 313 431 328 406 328" onClick={() => setActive({name: "", id: ""})}/>

                    <text style={text} transform="translate(148.57 24.14)">Barbell</text>
                    <text style={text} transform="translate(190.8 24.01)">Canoe</text>
                    <text style={text} transform="translate(163 65)">Volleyball</text>
                    <text style={text} transform="translate(170 160) rotate(-90)">Mountaineering</text>
                    <text style={{...text, fontSize: "8px"}} transform="translate(187 107)">Badminton</text>
                    <text style={{...text, fontSize: "8px"}} transform="translate(193 149)">Fencing</text>
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
