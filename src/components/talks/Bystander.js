import React, { useState } from 'react';
import tw from 'twin.macro';

const Container = tw.div`flex flex-col justify-center p-3`;
const Title = tw.div`font-semibold text-lg`;
const Body = tw.p`my-2 flex-grow`;

export default () => {

    return (
        <Container>
            <Title>Bystander</Title>
            <Body>This module is still being developed.</Body>
        </Container>
  );
}
