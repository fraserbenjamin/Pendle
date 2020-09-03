import React from 'react';
import tw from 'twin.macro';
import {Route} from "react-router-dom";

import Menu from '../components/talks/Menu';
import RespectConsent from '../components/talks/RespectConsent';

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;

export default () => {
    return (
        <Frame>
            <Container>
                <Route path="/talks/respect-consent" component={RespectConsent}/>
                <Route path="/event/meet-college-staff" component={null}/>
                <Route path="/event/meet-deanery-cat" component={null}/>
                <Route path="/event/meet-coursemates" component={null}/>
                <Route path="/" exact component={Menu}/>
            </Container>
        </Frame>
    );
}