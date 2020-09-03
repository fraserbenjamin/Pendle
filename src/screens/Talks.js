import React from 'react';
import tw from 'twin.macro';
import {Switch, Route} from "react-router-dom";

import Menu from '../components/talks/Menu';
import RespectConsent from '../components/talks/RespectConsent';
import FireSafety from '../components/talks/FireSafety';
import Bystander from '../components/talks/Bystander';
import HealthSafety from '../components/talks/HealthSafety';

import {useAnalytics} from "../components/Firebase";

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;

export default () => {
    const analytics = useAnalytics();

    analytics.logEvent('page_view', {
        page_title: 'Talks',
    });

    return (
        <Frame>
            <Container>
                <Switch>
                    <Route path="/talks/respect-consent" component={RespectConsent}/>
                    <Route path="/talks/fire-safety" component={FireSafety}/>
                    <Route path="/talks/health-safety" component={HealthSafety}/>
                    <Route path="/talks/bystander" component={Bystander}/>
                    <Route path="/" component={Menu}/>
                </Switch>
            </Container>
        </Frame>
    );
}