import {createContext} from 'react';

export default createContext({
    state: null,
    team: null,
    questions:null,
    teamId: null,
    setTeamId: null,
    setState: () => null,
    setQuestions: () => null,
    setGuess: () => null,
    round: null,
});