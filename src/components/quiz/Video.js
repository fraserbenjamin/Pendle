import React, {useContext} from 'react';
import tw from 'twin.macro';

import QuizContext from "../../context/quizContext";

const Video = tw.div`w-full md:w-3/5 mx-auto justify-center my-3 h-64 bg-gray-700`;

export default () => {
    const {teamId} = useContext(QuizContext);

    return teamId ? <Video/> : null;
}