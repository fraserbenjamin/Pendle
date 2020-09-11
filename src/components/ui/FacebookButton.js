import React from 'react';
import tw from 'twin.macro';

import Logo from "../../assets/icons/facebook.svg";

const Button = tw.button`bg-blue-800 text-white max-w-md w-full mx-auto rounded-md py-3 mb-3 mt-8 text-lg font-medium shadow-md hover:bg-blue-900 flex align-middle justify-center`;
const Img = tw.img`w-6 h-6 mr-5`;

export default ({children, onClick}) => {

    return (
        <Button onClick={onClick}>
            <Img src={Logo}/>
            {children ? children : "Open"}
        </Button>
  );
}
