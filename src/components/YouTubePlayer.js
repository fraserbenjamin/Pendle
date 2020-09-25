import React from 'react';
import tw from 'twin.macro';

const Player = tw.iframe`bg-black z-50`;

export default ({id}) => {

    return (
        <div tw="w-full relative" style={{paddingBottom: "56.25%"}}>
            <Player
                tw="absolute"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${id}?rel=0&autoplay=0&controls=1&fs=1`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen/>
        </div>

  );
}
