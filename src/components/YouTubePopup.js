import React from 'react';
import tw, {styled} from 'twin.macro';

const Container = tw.div`fixed w-full h-screen flex items-center justify-center top-0 left-0`;
const Frame = styled.div`
    ${tw`w-11/12 shadow-lg bg-black z-50 left-0 mx-auto relative`}
    padding-bottom: 56.25%;
`;
const Player = tw.iframe`w-full h-full absolute top-0 left-0 border-none`;
const Cover = tw.div`absolute w-full h-full bg-black opacity-75 top-0 left-0`;

export default ({id, close}) => {
    return (
        <>
            <Cover />
            <Container onClick={close}>
                <Frame>
                    <Player src={`https://www.youtube.com/embed/${id}?&autoplay=1`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Player>
                </Frame>
            </Container>
        </>
  );
}
