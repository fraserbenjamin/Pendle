import React from 'react';
import tw, {styled} from 'twin.macro';
import {Link} from "react-router-dom";

const Title = tw.div`font-semibold pt-3 text-lg`;
const Body = tw.div`my-2 mb-3`;

const Items = tw.div`flex flex-row justify-around`;
const Item = styled.div`
    ${tw`bg-red-500 m-1 `}
    flex: 1 0 auto;
    &:before {
        content:'';
        float:left;
        padding-top:100%;
    }
`;

export default () => {
    return (
        <>
            <Title>Introduction to University</Title>
            <Body>
            Be sure to complete all 4 of these introductory sessions.
            </Body>


        </>
    );
}