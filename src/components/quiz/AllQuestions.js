import React, {useState, useEffect, useContext} from "react";
import tw from 'twin.macro';

import QuizContext from "../../context/quizContext";
import QuestionView from "./QuestionView";

const Container = tw.div`w-full font-effra p-3`;
const Title = tw.div`font-bold p-3 text-lg`;

export default () => {
    const {state, teams, questions, teamId, round} = useContext(QuizContext);
    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        if(questions?.list?.length > 0 && teams?.list && teamId) {
            let result = [];
    
            for(let i=0; i<questions.list.length && i<=state.currentQuestion; i++) {
                
                result.push({
                    questionId: i,
                    question: questions.list[i],
                    answer: (teams.list[teamId]) ? teams.list[teamId][i] : null,
                });
            }
            setQuestionList(result);
        }
    }, [questions, teamId, teams, state]);

    return (
        <Container>
            <Title>All Questions</Title>
            {questionList.map((item,i) => <QuestionView key={i} data={item} active={item.question.round === round}/>)}
        </Container>
    );
}