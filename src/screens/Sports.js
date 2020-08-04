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
                Pendle has a wide variety of successful sporting teams. Last year alone, we won the A team football summer cup, were runners up in the table tennis and A team netball leagues, as well as winning the George Wyatt trophy as university bar sports champions for the third consecutive year!
                <br/><br/>
                As well as our very successful teams, there is plenty of opportunity to get involved with recreational sports, with our weekly Wednesday Workout sessions all about participation, as well as casual leagues for sports such as pool throughout the first term to give all Pendle students a chance to get involved!
                <br/><br/>
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
