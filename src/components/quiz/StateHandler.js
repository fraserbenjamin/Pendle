import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";

import useLocalStorage from "../../hooks/useLocalStorage";
import QuizContext from '../../context/quizContext';
import {useFirebase} from '../../components/Firebase';
const firebase = useFirebase();

const generateRandom = () => {
    let N = 6;
    return Array(N+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, N);
}

export default ({children}) => {
    const history = useHistory();
    const db = firebase.firestore();
    const [state, setState] = useState({});
    const [teams, setTeams] = useState([]);
    const [questions, setQuestions] = useState({});
    const [teamId, setTeamId] = useLocalStorage("teamId", generateRandom());

    useEffect(() => {
        if(!teamId || teamId === "null") {
            history.push("/event/quiz/introduction")
        }
    // eslint-disable-next-line
    }, [teamId])

    useEffect(() => {
        let unsubscribeState = db.collection("quiz").doc("state")
        .onSnapshot((doc) => {
            setState(doc.data());
        });

        let unsubscribeQuestions = db.collection("quiz").doc("questions")
        .onSnapshot((doc) => {
            setQuestions(doc.data());
        });

        let unsubscribeTeams = db.collection("quiz").doc("teams")
        .onSnapshot((doc) => {
            setTeams(doc.data());
        });

        return () => {
            unsubscribeState();
            unsubscribeQuestions();
            unsubscribeTeams();
        }
    // eslint-disable-next-line
    }, []);

    const getRound = () => {
        if(questions.list && questions.list[state.currentQuestion]) {
            return questions.list[state.currentQuestion].round;
        }

        return 0;
    }

    const setGuess = (questionId, guess) => {
        db.doc("quiz/teams").update({
            [`list.${teamId}.${questionId}`]: guess
        });
    }

    return (
        <QuizContext.Provider value={{
            state,
            teams,
            questions,
            teamId,
            setTeamId,
            setState,
            setTeams,
            setQuestions,
            setGuess,
            round: getRound()
          }}>
              {children}
        </QuizContext.Provider>
  );
}