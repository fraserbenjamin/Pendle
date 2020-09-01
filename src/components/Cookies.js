import React, {useContext} from "react";
import tw from "twin.macro";

import CookiesContext from "../context/cookiesContext";

const Cover = tw.div`fixed bg-gray-900 opacity-75 w-full h-full z-20`;

const Container = tw.div`fixed z-30 flex justify-center h-full w-full`;

const Modal = tw.div`self-center inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl sm:my-8 sm:align-middle sm:max-w-lg mx-3`;
const Content = tw.div`bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col`;
const Header = tw.h3`text-lg leading-6 font-medium text-gray-900`;
const Body = tw.p`leading-5 text-gray-800 my-3`;
const Confirm = tw.button`text-sm font-medium font-sans bg-pendle-green text-white border-none rounded-md p-2 cursor-pointer px-4 mt-3 self-end px-5`;

export default () => {
        const {cookiesAllowed, setCookiesAllowed} = useContext(CookiesContext);

        if(cookiesAllowed) return null;

        return (
            <>
                <Cover/>

                <Container>
                        <Modal>
                            <Content>
                                <Header>Welcome,</Header>
                                <Body>Our website uses cookies to provide a number of events and help determine which are most popular.</Body>
                                <Confirm onClick={() => setCookiesAllowed(true)}>Accept</Confirm>
                            </Content>
                        </Modal>
                </Container>
            </>
        );
}
