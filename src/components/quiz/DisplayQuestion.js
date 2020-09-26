import React, {useContext} from "react";
import tw from 'twin.macro';
import { useHistory } from "react-router-dom";

import QuizContext from "../../context/quizContext";
import QuestionView from "./QuestionView";

const Container = tw.div`w-full font-effra p-3`;
const Title = tw.div`font-bold p-3 text-lg`;
const Button = tw.button`m-2 p-3 rounded-sm font-semibold bg-pendle-green text-white flex-grow`;

export default () => {
    const history = useHistory();
    const {state, team, questions, teamId} = useContext(QuizContext);

    console.log("-------------------")
    console.log(state)
    console.log(team)
    console.log(questions)
    console.log(teamId)
    console.log("-------------------")

    if(state.currentQuestion >= 0 && questions?.list?.length > 0 && team && teamId && state.currentQuestion < questions.list.length) {
        let questionId = state.currentQuestion;
        let question = questions.list[questionId];
        let answer = (team.answers && team.answers[questionId]) ? team.answers[questionId] : null;
        
        return (
            <Container>
                <div tw="flex">
                    <Button onClick={() => history.push("/event/quiz/introduction")}>Team {teamId}</Button>
                    <Button onClick={() => history.push("/event/quiz/all")}>All Questions</Button>
                </div>

                <Title>Round {question.round} Question {state.currentQuestion + 1}</Title>

                <QuestionView data={{question, answer, questionId}} active={true}/>

            </Container>
        );
    }

    return "No Question Found"
}