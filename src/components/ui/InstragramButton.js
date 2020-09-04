import React from 'react';
import tw, {styled} from 'twin.macro';

import Logo from "../../assets/icons/instagram.svg";

const Button = styled.button`
    ${tw`text-white max-w-md w-full mx-auto rounded-md py-3 mb-3 mt-8 text-lg font-medium shadow-md flex align-middle justify-center`}
    background: #d6249f;
    background: radial-gradient(circle at 0% 157%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
`;
const Img = tw.img`w-6 h-6 mr-5`;

export default ({children, onClick}) => {

    return (
        <Button onClick={onClick}>
            <Img src={Logo}/>
            {children ? children : "Instagram"}
        </Button>
  );
}
