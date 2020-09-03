import React from 'react';
import tw from 'twin.macro';

import YouTubeLogo from "../../assets/icons/youtube.svg";

const YouTube = tw.button`bg-red-600 text-white max-w-md w-full mx-auto rounded-md py-3 mb-3 mt-8 text-lg font-medium shadow-md hover:bg-purple-700 flex align-middle justify-center`;
const Img = tw.img`w-6 h-6 mr-5`;

export default ({children, onClick}) => {

    return (
        <YouTube onClick={onClick}>
            <Img src={YouTubeLogo}/>
            {children ? children : "Watch"}
        </YouTube>
  );
}
