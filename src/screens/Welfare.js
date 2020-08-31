import React from 'react';
import tw from 'twin.macro';

import WelfarePoster from '../assets/welfare-poster.png';
import WelfarePosterWebP from '../assets/welfare-poster.webp';

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg`;
const Body = tw.div`my-2 mb-3`;
const Poster = tw.img`w-full`;
const Download = tw.a`relative flex justify-center w-full mt-3 text-center underline`;

export default () => {
    return (
        <Frame>
            <Container>
                <Title>Welfare</Title>
                <Body>
                Have a look at this handy guide to see what support is available to you at Lancaster.
                </Body>

                <Poster src={WelfarePosterWebP} alt="Welfare Poster"/>

                <Download href={WelfarePoster} download="Welfare Poster">
                    Click here to download
                </Download>
            </Container>
        </Frame>
  );
}
