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
    const url = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MGM5NmNiZDUtODg1Ni00MDU4LThlNjItYTc4MzgyOWUxNjYw%40thread.v2/0?context=%7b%22Tid%22%3a%229c9bcd11-977a-4e9c-a9a0-bc734090164a%22%2c%22Oid%22%3a%222091f8f7-0ae8-41ee-a81e-9ef3f7f2cf0e%22%2c%22IsBroadcastMeeting%22%3atrue%7d";

    return (
        <Frame>
            <Container>
                <Title>College Life Q and A</Title>
                <Body>
                    {event?.description}
                    <br/><br/>
                    Click the link below and launch teams to join our Live Q and A about college life.

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
