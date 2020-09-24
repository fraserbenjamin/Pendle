import React from 'react';
import tw from 'twin.macro';

import useDimensions from "../hooks/useDimensions";

const Player = tw.iframe`shadow-lg bg-black z-50`;

export default ({id, autoplay=true}) => {
    const videoRatio = 16/9;
    const [ref, {width}] = useDimensions();

    return (
        <Player
            ref={ref}
            width="100%"
            height={(width) ? width/videoRatio : 0}
            src={`https://www.youtube.com/embed/${id}?rel=0&autoplay=${autoplay ? "1" : "0"}&controls=1&fs=1`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen/>
  );
}
