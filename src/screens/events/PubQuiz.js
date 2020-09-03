import React from 'react';

import StateHandler from '../../components/quiz/StateHandler';
import Index from '../../components/quiz/Index';

import {useAnalytics} from "../../components/Firebase";

export default () => {
    const analytics = useAnalytics();

    analytics.logEvent('page_view', {
        page_title: 'Quiz',
    });

    return (
        <StateHandler>
            <Index/>
        </StateHandler>
  );
}