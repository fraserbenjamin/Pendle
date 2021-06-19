import React from 'react';
import tw from 'twin.macro';

import YouTubeButton from "../../components/ui/YouTubeButton";

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg`;
const Body = tw.div`flex flex-col`;

export default () => {
    const url = "https://youtu.be/G6_kI6YkNiE";

    return (
        <Frame>
            <Container>
                <Title>Pendle Pub Quiz</Title>
                <Body>
                    Click the link below at 19:00 to join the event.
                    <YouTubeButton onClick={() => window.open(url, "_blank")}/>
                </Body>
            </Container>
        </Frame>
  );
}
