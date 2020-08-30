import React, {useContext, useState} from "react";
import tw from 'twin.macro';
import {useHistory} from "react-router-dom";

import QuizContext from "../../context/quizContext";

const Container = tw.div`flex flex-col p-3`;
const Title = tw.div`font-bold text-lg`;
const H2 = tw.h2`font-bold text-lg mt-3`;
const Button = tw.button`p-3 rounded-sm font-semibold bg-pendle-green text-white flex-grow-0 w-64 mx-2`;
const Input = tw.input`p-3 rounded-sm font-semibold border border-4 text-black border-pendle-yellow flex-grow mx-2`;
const Form = tw.div`w-full flex mt-3`;

export default () => {
    const history = useHistory();
    const {setTeamId, teamId} = useContext(QuizContext);
    const [teamInput, setTeamInput] = useState(teamId);
   
    return (
        <Container>
            <Title>Introduction</Title>
            Welcome to the Pendle Pub Quiz!

            To make the quiz fun and easy for groups to play together you can answer questions online as well as joining with other people, even if you aren't in the same place!

            <H2>Team Code</H2>
            <Form>
                <Input type="text" value={teamInput} onChange={e => setTeamInput(e.target.value)}/>
                <Button onClick={() => {
                    setTeamId(teamInput);
                    history.push("/event/quiz");
                }}>Join</Button>
            </Form>
        </Container>
    )
}