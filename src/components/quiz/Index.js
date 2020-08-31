import React, {useContext} from 'react';
import tw from 'twin.macro';
import {Switch, Route, useRouteMatch} from "react-router-dom";

import DisplayQuestion from '../../components/quiz/DisplayQuestion';
import AllQuestions from '../../components/quiz/AllQuestions';
import Introduction from '../../components/quiz/Introduction';
import Video from '../../components/quiz/Video';

import QuizContext from "../../context/quizContext";

const Frame = tw.div`flex justify-center p-0 sm:p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;

export default () => {
    const match = useRouteMatch();
    const {state} = useContext(QuizContext);
    
    if(state.currentQuestion === -2) return <Placeholder/>;

    return (
        <Frame>
            <Container>
                <Video/>

                <Switch>
                    <Route path={`${match.path}/all`} component={AllQuestions}/>
                    <Route path={`${match.path}/introduction`} component={Introduction}/>
                    <Route path={match.path} component={DisplayQuestion}/>
                </Switch>

            </Container>
        </Frame>
    )
}

const Placeholder = () => {
    return (
        <div>
            There is no quiz currently running, please check the events calendar for our next one!
        </div>
    )
}