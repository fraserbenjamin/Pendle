import React from "react";
import tw from 'twin.macro';

import {useFirebase} from '../../components/Firebase';
const firebase = useFirebase();

const Container = tw.div`flex flex-col p-3`;
const Title = tw.div`font-bold text-lg`;
const Button = tw.button`p-3 rounded-sm font-semibold bg-pendle-green text-white flex-grow-0 w-64 mx-2`;


export default () => {
    const calculateScores = () => {
        const functions = firebase.app().functions('europe-west2');
        var calculateQuizScore = functions.httpsCallable('calculateQuizScore');
        calculateQuizScore().then((result) => {
            console.log(result.data);
        });
    }

    return (
        <Container>
            <Title>Admin</Title>

            <Button onClick={() => calculateScores()}>Calculate</Button>
        </Container>
    )
}