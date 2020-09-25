import React, {useContext, useState} from "react";
import tw from 'twin.macro';
import {useHistory} from "react-router-dom";

import QuizContext from "../../context/quizContext";

import {useFirebase} from '../../components/Firebase';
const firebase = useFirebase();

const Container = tw.div`flex flex-col p-3`;
const Title = tw.div`font-bold text-lg`;
const H2 = tw.h2`font-bold text-lg mt-3`;
const Button = tw.button`p-3 rounded-sm font-semibold bg-pendle-green text-white flex-grow-0 w-64 mx-2`;
const Input = tw.input`p-3 rounded-sm font-semibold border border-4 text-black border-pendle-yellow flex-grow mx-2`;
const Form = tw.div`w-full flex mt-3`;

export default () => {
    const history = useHistory();
    const db = firebase.firestore();
    const {setTeamId, teamId, team} = useContext(QuizContext);
    const [newTeamName, setNewTeamName] = useState("");
    const [joinTeamCode, setJoinTeamCode] = useState("");
   
    const getNewTeam = () => {
        if(newTeamName.length <= 0) {
            alert("Please include a team name");
            return;
        }

        const functions = firebase.app().functions('europe-west2');
        var createTeam = functions.httpsCallable('createTeam');
        createTeam({teamName: newTeamName}).then((result) => {
            console.log(result.data)
            setTeamId(result.data);
            history.push("/event/quiz");
        });
    }

    const joinTeam = async() => {
        if(!joinTeamCode) return;

        const doc = await db.collection("party").doc(joinTeamCode).get();
        console.log(doc)
        if(doc.exists) {
            setTeamId(joinTeamCode);
            history.push("/event/quiz");
        } else {
            alert("Failed to join team");
        }
    }

    const leaveTeam = () => {
        if(window.confirm("Are you sure you want to leave your current team?")) {
            setTeamId("null");
        }
    }

    return (
        <Container>
            <Title>Introduction</Title>
            {(teamId === "null") && <>
            Welcome to the Pendle Pub Quiz!

            To make the quiz fun and easy for groups to play together you can answer questions online as well as joining with other people, even if you aren't in the same place!<br/><br/>
            You can join an existing team using the team code or create your own. Please note that innapropriate team names will be changed. Remember to hold onto your code - if you lose it you won't be able to rejoin and claim your prize if you win.

            <H2>Join a Team</H2>
            <Form>
                <Input type="text" placeholder="Team Code" value={joinTeamCode} onChange={e => setJoinTeamCode(e.target.value)}/>
                <Button onClick={joinTeam}>Join</Button>
            </Form>

            <H2>Create a Team</H2>
            <Form>
                <Input type="text" placeholder="Team Name" value={newTeamName} onChange={e => setNewTeamName(e.target.value)}/>
                <Button onClick={getNewTeam}>Create</Button>
            </Form>
            </>}

            {(teamId !== "null") && <>
            <p>You are currently a member of <b>{team?.name}</b>. You can leave this team below but if you don't have a copy of your team code <b>{teamId}</b> you won't be able to rejoin.</p>

            <div tw="flex">
                <Button tw="mt-5" onClick={() => history.push('./')}>Return to Quiz</Button>
                <Button tw="mt-5 bg-red-600" onClick={leaveTeam}>Leave Team</Button>
            </div>
            </>}

        </Container>
    )
}