import React, {useState, useEffect, useContext} from "react";
import tw from 'twin.macro';
import {Link, useRouteMatch} from "react-router-dom";

import QuizContext from "../../context/quizContext";
import QuestionView from "./QuestionView";

const Container = tw.div`w-full font-effra p-3`;
const Title = tw.div`font-bold p-3 text-lg`;

export default () => {
    const match = useRouteMatch();
    const {state, teams, questions, teamId} = useContext(QuizContext);
    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        if(state.currentQuestion >= 0 && questions?.list?.length > 0 && teams?.list && teamId) {
            let result = [];
    
            for(let i=0; i<questions.list.length && i<=state.currentQuestion; i++) {
                console.log("I", i)
                result.push({
                    questionId: i,
                    question: questions.list[i],
                    answer: teams.list[teamId][i],
                });
            }
            console.log(result)
            setQuestionList(result);
        }
    }, [questions, teamId, teams, state]);

    return (
        <Container>
            <Title>All Questions</Title>
            {questionList.map((item,i) => <QuestionView key={i} data={item}/>)}
        </Container>
    );
}