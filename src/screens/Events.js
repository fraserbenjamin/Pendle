import React from 'react';
import tw from 'twin.macro';
import {Switch, Route, useRouteMatch} from "react-router-dom";

import EventsList from "../components/EventsList";

//const Container = tw.div`w-full bg-pendle-green flex flex-row whitespace-no-wrap overflow-x-auto`;
const Container = tw.div``;

export default () => {
    const match = useRouteMatch();

    return (
        <Container>
            <Switch>
                <Route path={`${match.path}/:eventPath`} component={null}/>
                <Route path={match.path} component={EventsList}/>
            </Switch>
        </Container>
    );
}