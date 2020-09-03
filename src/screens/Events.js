import React from 'react';
import tw from 'twin.macro';
import {Switch, Route} from "react-router-dom";

import EventsList from "../components/EventsList";
import {useAnalytics} from "../components/Firebase";

const Welcome = React.lazy(() => import("../screens/events/Welcome"));
const CookOff = React.lazy(() => import("../screens/events/CookOff"));
const SocietyShowcase = React.lazy(() => import("../screens/events/SocietyShowcase"));
const PubQuiz = React.lazy(() => import("../screens/events/PubQuiz"));
const PendleLive = React.lazy(() => import("../screens/events/PendleLive"));
const MeetCoursemates = React.lazy(() => import("../screens/events/MeetCoursemates"));
const BeachParty = React.lazy(() => import("../screens/events/BeachParty"));
const CollegeQA = React.lazy(() => import("../screens/events/CollegeQA"));
const MeetDeaneryCAT = React.lazy(() => import("../screens/events/MeetDeaneryCAT"));
const MeetCollegeStaff = React.lazy(() => import("../screens/events/MeetCollegeStaff"));
const PendleParty = React.lazy(() => import("../screens/events/PendleParty"));

const Container = tw.div``;

export default () => {
    const analytics = useAnalytics();

    analytics.logEvent('page_view', {
        page_title: 'Events',
    });

    return (
        <Container>
            <Switch>
                <Route path="/event/party-playlist" component={PendleParty}/>
                <Route path="/event/meet-college-staff" component={MeetCollegeStaff}/>
                <Route path="/event/meet-deanery-cat" component={MeetDeaneryCAT}/>
                <Route path="/event/meet-coursemates" component={MeetCoursemates}/>
                <Route path="/event/college-life" component={CollegeQA}/>
                <Route path="/event/beach-party" component={BeachParty}/>
                <Route path="/event/welcome" component={Welcome}/>
                <Route path="/event/jcr-cook-off" component={CookOff}/>
                <Route path="/event/society-showcase" component={SocietyShowcase}/>
                <Route path="/event/quiz" component={PubQuiz}/>
                <Route path="/event/pendle-live" component={PendleLive}/>
                <Route path="/event/:id" component={Placeholder}/>
                <Route path="/" exact component={EventsList}/>
            </Switch>
        </Container>
    );
}

const Placeholder = () => {
    return (
        <div>This event hasn't been setup</div>
    );
}