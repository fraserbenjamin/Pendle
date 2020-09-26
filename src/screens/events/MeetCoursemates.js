import React, {useContext} from 'react';
import tw from 'twin.macro';
import {useLocation} from "react-router-dom";

import EventsContext from "../../context/eventsContext";

import TeamsLogo from "../../assets/icons/microsoft-teams.svg";
import Tag from "../../components/ui/Tag";

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg`;
const Body = tw.div`flex flex-col`;
const Teams = tw.button`bg-purple-800 text-white max-w-md w-full mx-auto rounded-md py-3 mb-3 mt-8 text-lg font-medium shadow-md hover:bg-purple-700 flex align-middle justify-center`;
const Img = tw.img`w-6 h-6 mr-5`;

export default () => {
    const {events} = useContext(EventsContext);
    const location = useLocation();

    const event = events.filter(item => `/event/${item.path}` === location.pathname)[0];
    const url = "https://teams.microsoft.com/l/team/19%3acb9960a0c3bb4d05ab46539a36f7b99e%40thread.tacv2/conversations?groupId=29ce16a3-4278-449b-97cf-1d8554a6d611&tenantId=9c9bcd11-977a-4e9c-a9a0-bc734090164a";

    return (
        <Frame>
            <Container>
                <Title>Meet Your Coursemates</Title>
                <Body>
                    {event?.description}
                    <br/><br/>
                    Click the link below and launch teams to chat to others on your course. The join code is <b>nv11by3</b>

                    <Teams onClick={() => window.open(url, "_blank")}>
                        <Img src={TeamsLogo}/>
                        Join
                    </Teams>
                </Body>

                {event?.tags?.map((tag,i) => (
                    <Tag key={i}>{tag}</Tag>
                ))}
            </Container>
        </Frame>
  );
}
