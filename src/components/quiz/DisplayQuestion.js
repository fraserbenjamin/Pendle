import React, {useContext} from "react";
import tw from 'twin.macro';
import { useHistory } from "react-router-dom";

import QuizContext from "../../context/quizContext";
import QuestionView from "./QuestionView";

const Container = tw.div`w-full font-effra p-3`;
const Title = tw.div`font-bold p-3 text-lg`;
const Team = tw.button`m-2 p-3 rounded-sm font-semibold bg-pendle-green text-white`;

export default () => {
    const history = useHistory();
    const {state, teams, questions, teamId} = useContext(QuizContext);

    if(state.currentQuestion >= 0 && questions?.list?.length > 0 && teams?.list && teamId && state.currentQuestion < questions.list.length) {
        let questionId = state.currentQuestion;
        let question = questions.list[questionId];
        let answer = (teams.list[teamId]) ? teams.list[teamId][questionId] : null;

        return (
            <Container>
                
                <Team onClick={() => history.push("/event/quiz/introduction")}>Team {teamId}</Team>

                <Title>Round {question.round} Question {state.currentQuestion + 1}</Title>
                <QuestionView data={{question, answer, questionId}} active={true}/>
            </Container>
        );
    }

    return "No Question Found"
}