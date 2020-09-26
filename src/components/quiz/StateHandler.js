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
    const [team, setTeam] = useState({});
    const [questions, setQuestions] = useState({});
    const [teamId, setTeamId] = useLocalStorage("teamId", "null");

    useEffect(() => {
        if(!teamId || teamId === "null") {
            history.push("/event/quiz/introduction")
        }
    // eslint-disable-next-line
    }, [teamId])

    useEffect(() => {
        let unsubscribeTeam = db.collection("party").doc(teamId)
        .onSnapshot((doc) => {
            setTeam(doc.data());
        });

        let unsubscribeState = db.collection("quiz").doc("state")
        .onSnapshot((doc) => {
            console.log(doc.data())
            setState(doc.data());
        });

        let unsubscribeQuestions = db.collection("quiz").doc("questions")
        .onSnapshot((doc) => {
            console.log(doc.data())
            setQuestions(doc.data());
        });

        return () => {
            unsubscribeState();
            unsubscribeQuestions();
            unsubscribeTeam();
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
        db.collection("party").doc(teamId).update({
            [`answers.${questionId}`]: guess
        });
    }

    return (
        <QuizContext.Provider value={{
            state,
            team,
            questions,
            teamId,
            setTeamId,
            setState,
            setQuestions,
            setGuess,
            round: getRound(),
          }}>
              {children}
        </QuizContext.Provider>
  );
}