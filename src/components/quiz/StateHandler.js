import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";

import useLocalStorage from "../../hooks/useLocalStorage";
import QuizContext from '../../context/quizContext';
import {useFirebase} from '../../components/Firebase';
const firebase = useFirebase();

export default ({children}) => {
    const history = useHistory();
    const db = firebase.firestore();
    const [state, setState] = useState({});
    const [teams, setTeams] = useState([]);
    const [questions, setQuestions] = useState({});
    const [teamId, setTeamId] = useLocalStorage("teamId", null);

    useEffect(() => {
        console.log(teamId)
        if(!teamId || teamId === "null") {
            history.push("/event/quiz/introduction")
        }
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
            setGuess: setGuess
          }}>
              {children}
        </QuizContext.Provider>
  );
}