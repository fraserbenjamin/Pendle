import React, {useContext} from 'react';
import tw from 'twin.macro';
import {Switch, Route, useRouteMatch} from "react-router-dom";

import DisplayQuestion from './DisplayQuestion';
import AllQuestions from './AllQuestions';
import Introduction from './Introduction';

import YouTubePlayer from "../YouTubePlayer";
import QuizContext from "../../context/quizContext";
import Admin from './Admin';

const Frame = tw.div`flex justify-center p-0 sm:p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;

export default () => {
    const match = useRouteMatch();
    const {state} = useContext(QuizContext);
    
    if(state.currentQuestion === -2) return <Placeholder/>;

    return (
        <Frame>
            <Container>
                <div>
                    <YouTubePlayer id="UXOqf32oZKc"/>
                </div>

                <Switch>
                    <Route path={`${match.path}/admin`} component={Admin}/>
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