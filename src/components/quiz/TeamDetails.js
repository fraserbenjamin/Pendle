import React, {useContext} from "react";
import tw from 'twin.macro';

import QuizContext from "../../context/quizContext";

const Container = tw.div`w-full font-effra p-3`;
const Title = tw.div`font-bold p-3 text-lg`;

export default () => {
    const {teamId} = useContext(QuizContext);

    if(teamId) {
        return (
            <Container>
                <Title>Team Details</Title>
                Team name: {teamId}
            </Container>
        );
    }

    return "No Team found"
}