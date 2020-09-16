import React, { useState } from 'react';
import tw from 'twin.macro';
import { useHistory } from 'react-router-dom';

import YouTubeButton from '../ui/YouTubeButton';
import YouTubePopup from '../YouTubePopup';

const Container = tw.div`flex flex-col justify-center p-3`;
const Title = tw.div`font-semibold text-lg`;
const Body = tw.p`my-2 flex-grow`;
const Button = tw.button`bg-pendle-green text-white py-1 px-5 rounded-md`;

export default () => {
    const [videoActive, setVideoActive] = useState(false);
    const history = useHistory();

    return (
        <Container>
            <div tw="mb-8">
                <Button onClick={() => history.push("/talks")}>Back to All Introductions</Button>
            </div>

            <Title>Health and Safety</Title>
            <Body>
                This short video produced by Lancaster University, Lancaster University Students' Union and Pendle/Furness/Cartmel JCRs will help explain the guidelines for a safe return in response to Covid-19. Further details can be found at the university website <a tw="hover:underline text-blue-800" href="https://lancaster.ac.uk">lancaster.ac.uk</a>
            </Body>

            <YouTubeButton onClick={() => setVideoActive(true)}/>
            {videoActive && <YouTubePopup id="rMNlPyrAink" close={() => setVideoActive(false)}/>}
        </Container>
  );
}
