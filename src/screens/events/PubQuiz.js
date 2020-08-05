import React from 'react';
import tw from 'twin.macro';
import {Switch, Route, useRouteMatch} from "react-router-dom";

import DisplayQuestion from '../../components/quiz/DisplayQuestion';
import TeamDetails from '../../components/quiz/TeamDetails';
import AllQuestions from '../../components/quiz/AllQuestions';
import StateHandler from '../../components/quiz/StateHandler';

const Frame = tw.div`flex justify-center p-0 sm:p-3`;
const Video = tw.div`w-full md:w-3/5 mx-auto justify-center my-3 h-64 bg-gray-700`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg`;

export default () => {
    const match = useRouteMatch();

    return (
        <StateHandler>
            <Frame>
                <Container>
                    <Title>Pendle Pub Quiz</Title>

                    <Video/>

                    <TeamDetails/>

                    <Switch>
                        <Route path={`${match.path}/all`} component={AllQuestions}/>
                        <Route path={match.path} component={DisplayQuestion}/>
                    </Switch>

                </Container>
            </Frame>
        </StateHandler>
  );
}