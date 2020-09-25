import React, {useState, useEffect, useContext} from "react";
import tw from 'twin.macro';
import { useHistory } from "react-router-dom";

import QuizContext from "../../context/quizContext";
import QuestionView from "./QuestionView";

const Container = tw.div`w-full font-effra p-3`;
const Title = tw.div`font-bold p-3 text-lg`;
const Button = tw.button`m-2 p-3 rounded-sm font-semibold bg-pendle-green text-white`;

export default () => {
    const {state, team, questions, teamId, round} = useContext(QuizContext);
    const [questionList, setQuestionList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        if(questions?.list?.length > 0 && team && teamId) {
            let result = [];
    
            for(let i=0; i<questions.list.length && i<=state.currentQuestion; i++) {
                
                result.push({
                    questionId: i,
                    question: questions.list[i],
                    answer: (team.answers) ? team.answers[i] : null,
                });
            }
            setQuestionList(result);
        }
    }, [questions, teamId, team, state]);

    return (
        <Container>
            <div tw="flex"><Button tw="flex-grow" onClick={() => history.push("./")}>Live View</Button></div>

            <Title>All Questions</Title>
            {questionList.map((item,i) => <QuestionView key={i} data={item} active={item.question.round === round}/>)}
        </Container>
    );
}