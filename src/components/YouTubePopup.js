import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';

import useWindowSize from '../hooks/useWindowSize';

const Container = tw.div`fixed w-full h-screen flex items-center justify-center top-0 left-0`;
const Player = tw.iframe`shadow-lg bg-black z-50`;
const Cover = tw.div`absolute w-full h-full bg-black opacity-75 top-0 left-0`;

export default ({id, close, autoplay=true}) => {
    const windowSize = useWindowSize();
    const [size, setSize] = useState([0,0]);

    useEffect(() => {
        const videoRatio = 16/9;
        let screenRatio = windowSize.width / windowSize.height;
        let fraction = 0.9;

        if(screenRatio < videoRatio) {
            //Tall
            setSize([windowSize.width*fraction, windowSize.width/videoRatio])
        } else {
            //Wide
            setSize([windowSize.height*videoRatio, windowSize.height*fraction])
        }

    }, [windowSize]);

    return (
        <>
            <Cover />
            <Container onClick={close}>
                <Player width={size[0]} height={size[1]} src={`https://www.youtube.com/embed/${id}?rel=0&autoplay=${autoplay ? "1" : "0"}&controls=1&fs=1`} allow="accelerometer; autoplay; modestbranding; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen></Player>
            </Container>
        </>
  );
}
