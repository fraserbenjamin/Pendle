import {createContext} from 'react';

export default createContext({
    state: null,
    teams: null,
    questions:null,
    teamId: null,
    setState: () => null,
    setTeams: () => null,
    setQuestions: () => null,
    setGuess: () => null,
});