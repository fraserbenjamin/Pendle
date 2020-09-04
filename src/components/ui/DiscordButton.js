import React from 'react';
import tw from 'twin.macro';

import DiscordLogo from "../../assets/icons/discord.svg";

const Discord = tw.button`bg-indigo-600 text-white max-w-md w-full mx-auto rounded-md py-3 mb-3 mt-8 text-lg font-medium shadow-md hover:bg-indigo-700 flex align-middle justify-center`;
const Img = tw.img`w-6 h-6 mr-5`;

export default ({children, onClick}) => {

    return (
        <Discord onClick={onClick}>
            <Img src={DiscordLogo}/>
            {children ? children : "Join"}
        </Discord>
  );
}
