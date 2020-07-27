import React from 'react';
import tw from 'twin.macro';

import Skeleton from "./ui/Skeleton";

const Container = tw.div`w-auto relative bg-white p-3 font-effra shadow-md mx-3 mt-3`;

export default () => {
  return (
    <Container>
        <Skeleton style={{width: "25%"}}/>
        <Skeleton/>
        <Skeleton style={{width: "80%"}}/>
        <Skeleton style={{width: "40%"}}/>
    </Container>
  );
}