import React from 'react';
import tw from 'twin.macro';

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg`;
const Body = tw.div`my-2 mb-8`;

export default () => {
    return (
        <Frame>
            <Container>
                <Title>Welfare</Title>
                <Body>
                Here's some great tips for staying healthy.
                </Body>

            </Container>
        </Frame>
  );
}
