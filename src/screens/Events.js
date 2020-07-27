import React from 'react';
import tw from 'twin.macro';
import {Switch, Route} from "react-router-dom";

import EventsList from "../components/EventsList";

const Welcome = React.lazy(() => import("../screens/events/Welcome"));

const Container = tw.div``;

export default () => {
    return (
        <Container>
            <Switch>
                <Route path="/event/welcome" component={Welcome}/>
                <Route path="/" exact component={EventsList}/>
            </Switch>
        </Container>
    );
}