import React from 'react';
import tw from 'twin.macro';
import {Switch, Route} from "react-router-dom";

import EventsList from "../components/EventsList";

const Welcome = React.lazy(() => import("../screens/events/Welcome"));
const CookOff = React.lazy(() => import("../screens/events/CookOff"));
const FreshersFair = React.lazy(() => import("../screens/events/FreshersFair"));
const PubQuiz = React.lazy(() => import("../screens/events/PubQuiz"));
const PendleLive = React.lazy(() => import("../screens/events/PendleLive"));

const Container = tw.div``;

export default () => {
    return (
        <Container>
            <Switch>
                <Route path="/event/welcome" component={Welcome}/>
                <Route path="/event/jcr-cook-off" component={CookOff}/>
                <Route path="/event/virtual-freshers-fair" component={FreshersFair}/>
                <Route path="/event/quiz" component={PubQuiz}/>
                <Route path="/event/pendle-live" component={PendleLive}/>
                <Route path="/" exact component={EventsList}/>
            </Switch>
        </Container>
    );
}