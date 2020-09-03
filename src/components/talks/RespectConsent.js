import React, { useState } from 'react';
import tw from 'twin.macro';

import YouTubeButton from '../ui/YouTubeButton';
import YouTubePopup from '../YouTubePopup';

const Container = tw.div`flex flex-col justify-center p-3`;
const Title = tw.div`font-semibold text-lg`;
const Body = tw.p`my-2 flex-grow`;

export default () => {
    const [videoActive, setVideoActive] = useState(false);

    return (
        <Container>
            <Title>Respect and Consent</Title>
            <Body>Watch the following video produced by the Students' Union on Respect and Consent.</Body>

            <YouTubeButton onClick={() => setVideoActive(true)}/>
            {videoActive && <YouTubePopup id="ph7Dbt58-eA" close={() => setVideoActive(false)}/>}
        </Container>
  );
}
