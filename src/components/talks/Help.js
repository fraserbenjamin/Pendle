import React from 'react';
import tw from 'twin.macro';
import { useHistory } from 'react-router-dom';

const Container = tw.div`flex flex-col justify-center p-3`;
const Title = tw.div`font-semibold text-lg`;
const Body = tw.p`my-2 flex-grow`;
const Button = tw.button`bg-pendle-yellow text-black py-1 px-5 rounded-md font-medium`;

export default () => {
    const history = useHistory();

    return (
        <Container>
            <div tw="mb-8">
                <Button onClick={() => history.push("/talks")}>Back to All Introductions</Button>
            </div>

            <Title>Help</Title>
            <Body>
                If you have any issues accessing the training, please email<br/>
                <a tw="hover:underline text-blue-800" href="mailto:f.benjamin@lancaster.ac.uk">f.benjamin@lancaster.ac.uk</a>
            </Body>
        </Container>
  );
}
