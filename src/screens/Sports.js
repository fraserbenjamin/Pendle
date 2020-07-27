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
                <Title>Sports</Title>
                <Body>
                Here's a list of college sports:
                <ul>
                    <li>Football</li>
                    <li>Netball</li>
                    <li>Table Tennis</li>
                    <li>Darts</li>
                    <li>Pool</li>
                    <li>Dominos</li>
                </ul>
                </Body>

            </Container>
        </Frame>
  );
}
