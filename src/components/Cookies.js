import React, {useContext} from "react";
import tw from "twin.macro";

import CookiesContext from "../context/cookiesContext";

const Container = tw.div`w-full p-3 overflow-y-auto flex flex-wrap text-white font-wgsb mb-12 lg:px-32`;
const Header = tw.div`text-3xl font-sans mb-3`;
const Body = tw.div`text-lg font-light font-sans`;
const Confirm = tw.button`text-sm font-medium font-sans bg-white text-black border-none rounded-sm p-2 cursor-pointer px-4 mt-3`;

export default () => {
        const {cookiesAllowed, setCookiesAllowed} = useContext(CookiesContext);

        if(cookiesAllowed) return null;

        return (
            <Container>
                <Header>Welcome,</Header>
                <Body>
                Our website uses cookies to provide the best events possible.<br/>
                <Confirm onClick={() => setCookiesAllowed(true)}>Accept</Confirm>
                </Body>
            </Container>
        );
}
