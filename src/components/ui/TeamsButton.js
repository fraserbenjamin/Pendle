import React from 'react';
import tw from 'twin.macro';

import TeamsLogo from "../../assets/icons/microsoft-teams.svg";

const Teams = tw.button`bg-purple-800 text-white max-w-md w-full mx-auto rounded-md py-3 mb-3 mt-8 text-lg font-medium shadow-md hover:bg-purple-700 flex align-middle justify-center`;
const Img = tw.img`w-6 h-6 mr-5`;

export default ({children, onClick}) => {

    return (
        <Teams onClick={onClick}>
            <Img src={TeamsLogo}/>
            {children ? children : "Join"}
        </Teams>
  );
}
