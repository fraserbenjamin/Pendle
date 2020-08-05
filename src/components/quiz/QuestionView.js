import React, {useContext} from "react";
import tw, {styled} from 'twin.macro';

import QuizContext from "../../context/quizContext";

const Card = tw.div`w-auto border-4 border-solid border-pendle-green rounded-lg m-3 p-3`;
const Title = tw.h1`font-bold p-3 text-lg`;

const Options = tw.div`w-full p-3 flex flex-row`;
const Option = styled.button`${tw`flex-grow m-2 p-3 rounded-sm font-semibold`}${props => props.selected ? tw`bg-pendle-yellow text-black` : tw`bg-pendle-green text-white`}`;

export default ({data}) => {
    const {setGuess} = useContext(QuizContext);

    return (
        <Card>
            <Title>{data.question.title}</Title>

            <Options>
                    <Option selected={data.answer === 1} onClick={() => setGuess(data.questionId, 1)}>{data.question.option1}</Option>
                    <Option selected={data.answer === 2} onClick={() => setGuess(data.questionId, 2)}>{data.question.option2}</Option>
                    <Option selected={data.answer === 3} onClick={() => setGuess(data.questionId, 3)}>{data.question.option3}</Option>
                    <Option selected={data.answer === 4} onClick={() => setGuess(data.questionId, 4)}>{data.question.option4}</Option>
            </Options>
        </Card>
    );
}