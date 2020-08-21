import React, {useContext} from "react";
import tw, {styled} from 'twin.macro';
//import {useRouteMatch} from "react-router-dom";

import QuizContext from "../../context/quizContext";

const Container = tw.div`w-full font-effra p-3`;
const Title = tw.div`font-bold p-3 text-lg`;
const Options = tw.div`w-full p-3 grid grid-cols-2`;
const Option = styled.button`${tw`m-2 p-3 rounded-sm font-semibold`}${props => props.selected ? tw`bg-pendle-yellow text-black` : tw`bg-pendle-green text-white`}`;

export default () => {
    //const match = useRouteMatch();
    const {state, teams, questions, setGuess, teamId} = useContext(QuizContext);

    if(state.currentQuestion >= 0 && questions?.list?.length > 0 && teams?.list && teamId && state.currentQuestion < questions.list.length) {
        let question = questions.list[state.currentQuestion];

        return (
            <Container>
                <Title>[{state.currentQuestion + 1}] {question.title}</Title>

                <Options>
                    <Option selected={teams.list[teamId][state.currentQuestion] === 1} onClick={() => setGuess(state.currentQuestion, 1)}>{question.option1}</Option>
                    <Option selected={teams.list[teamId][state.currentQuestion] === 2} onClick={() => setGuess(state.currentQuestion, 2)}>{question.option2}</Option>
                    <Option selected={teams.list[teamId][state.currentQuestion] === 3} onClick={() => setGuess(state.currentQuestion, 3)}>{question.option3}</Option>
                    <Option selected={teams.list[teamId][state.currentQuestion] === 4} onClick={() => setGuess(state.currentQuestion, 4)}>{question.option4}</Option>
                </Options>
            </Container>
        );
    }

    return "No Question Found"
}