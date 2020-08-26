import React from 'react';
import tw from 'twin.macro';
import {Switch, Route, useRouteMatch, Link} from "react-router-dom";

import DisplayQuestion from '../../components/quiz/DisplayQuestion';
import TeamDetails from '../../components/quiz/TeamDetails';
import AllQuestions from '../../components/quiz/AllQuestions';
import StateHandler from '../../components/quiz/StateHandler';
import Introduction from '../../components/quiz/Introduction';
import Video from '../../components/quiz/Video';

import QuizContext from "../../context/quizContext";

const Frame = tw.div`flex justify-center p-0 sm:p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg`;

export default () => {
    const match = useRouteMatch();
    
    return (
        <StateHandler>
            <Frame>
                <Container>
                    <Link to="/event/quiz/">Home</Link><br/>
                    <Link to="/event/quiz/all">All Questions</Link><br/>
                    <Link to="/event/quiz/team">Team Details</Link><br/>
                    <br/>

                    <Video/>

                    <Switch>
                        <Route path={`${match.path}/all`} component={AllQuestions}/>
                        <Route path={`${match.path}/team`} component={TeamDetails}/>
                        <Route path={`${match.path}/introduction`} component={Introduction}/>
                        <Route path={match.path} component={DisplayQuestion}/>
                    </Switch>

                </Container>
            </Frame>
        </StateHandler>
  );
}