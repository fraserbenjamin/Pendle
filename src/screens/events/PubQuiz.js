import React from 'react';
import tw from 'twin.macro';

import DisplayQuestion from '../../components/quiz/DisplayQuestion';
import TeamDetails from '../../components/quiz/TeamDetails';
import AllQuestions from '../../components/quiz/AllQuestions';
import StateHandler from '../../components/quiz/StateHandler';

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg`;

export default () => {


    return (
        <StateHandler>
            <Frame>
                <Container>
                    <Title>Pendle Pub Quiz</Title>
                    <TeamDetails/>
                    <DisplayQuestion/>
                    <AllQuestions/>

                </Container>
            </Frame>
        </StateHandler>
  );
}