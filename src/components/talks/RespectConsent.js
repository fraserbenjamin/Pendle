import React, { useState } from 'react';
import tw from 'twin.macro';
import { useHistory } from 'react-router-dom';

import YouTubeButton from '../ui/YouTubeButton';
import YouTubePopup from '../YouTubePopup';

const Container = tw.div`flex flex-col justify-center p-3`;
const Title = tw.div`font-semibold text-lg`;
const Body = tw.p`my-2 flex-grow`;
const Button = tw.button`bg-pendle-yellow text-black py-1 px-5 rounded-md`;

export default () => {
    const [videoActive, setVideoActive] = useState(false);
    const history = useHistory();

    return (
        <Container>
            <div tw="mb-8">
                <Button onClick={() => history.push("/talks")}>Back to All Introductions</Button>
            </div>

            <Title>Respect and Consent</Title>
            <Body>Watch the following video produced by the Students' Union on Respect and Consent.</Body>

            <YouTubeButton onClick={() => setVideoActive(true)}/>
            {videoActive && <YouTubePopup id="DcG8KuGSpZI" close={() => setVideoActive(false)}/>}
        </Container>
  );
}
