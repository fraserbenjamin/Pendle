import React, {useContext, useEffect, useState} from "react";
import tw, {styled} from 'twin.macro';

import QuizContext from "../../context/quizContext";

import {useFirebase} from '../../components/Firebase';
const firebase = useFirebase();

const Card = tw.div`w-auto border-4 border-solid border-pendle-green rounded-lg m-3 p-3`;
const Title = tw.h1`font-bold p-3 text-lg`;
const Row = tw.div`w-full flex justify-center`;
const Image = tw.img`w-full max-w-lg`;

const styleHandler = (active, selected) => {
    if(active && selected) return tw`bg-pendle-yellow text-black`;
    if(active && !selected) return tw`bg-pendle-green text-white`;
    if(!active && selected) return tw`bg-black text-white cursor-not-allowed`;
    if(!active && !selected) return tw`bg-gray-400 text-black cursor-not-allowed`;
}

const Options = tw.div`w-full p-3 flex flex-row flex-wrap`;
const Option = styled.button`${tw`flex-grow m-2 p-3 rounded-sm font-semibold`}${props => styleHandler(props.active, props.selected)}`;

export default ({data, active}) => {
    const {setGuess} = useContext(QuizContext);
    const [image, setImage] = useState(null);

    useEffect(() => {
        if(data.question.picture) {
            var storage = firebase.storage();
            var storageRef = storage.ref();
    
            storageRef.child(`Quiz/${data.question.picture}`).getDownloadURL().then(function(url) {
                setImage(url)
            });
        } else {
            setImage(null);
        }
    }, [data.question.picture]);

    return (
        <Card>
            <Title>{data.question.title}</Title>

            {image && <Row><Image src={image}/></Row>}

            <Options>
                    <Option selected={data.answer === 1} active={active} onClick={() => active ? setGuess(data.questionId, 1) : null}>{data.question.option1}</Option>
                    <Option selected={data.answer === 2} active={active} onClick={() => active ? setGuess(data.questionId, 2) : null}>{data.question.option2}</Option>
                    <Option selected={data.answer === 3} active={active} onClick={() => active ? setGuess(data.questionId, 3) : null}>{data.question.option3}</Option>
                    <Option selected={data.answer === 4} active={active} onClick={() => active ? setGuess(data.questionId, 4) : null}>{data.question.option4}</Option>
            </Options>
        </Card>
    );
}