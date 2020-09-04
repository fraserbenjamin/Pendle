import React from 'react';
import tw from 'twin.macro';
import {Link} from "react-router-dom";

import CollegesWebp from "../../assets/colleges.webp";

const Title = tw.div`font-semibold pt-3 text-lg`;
const Body = tw.div`my-2 mb-3`;

const Frame = tw.div`w-full h-auto grid grid-cols-1 md:grid-cols-2 h-auto`;
const Item = tw(Link)`p-1 rounded-lg relative m-1`;
const MenuTitle = tw.h1`font-medium text-lg p-2`;
const Banner = tw.div`w-full h-auto p-3 bg-gray-200 font-medium text-center my-3`;
const Colleges = tw.img`w-full`;

const Fire = tw(Item)`bg-red-600 text-white`;
const Consent = tw(Item)`bg-purple-800 text-white`;
const Safety = tw(Item)`bg-teal-600 text-white`;

export default () => {
    return (
        <>
            <Colleges src={CollegesWebp}/>
            <Banner>Please note this training applies to all colleges</Banner>

            <Title>Introduction to University</Title>
            <Body>
            Be sure to complete all 4 of these introductory sessions.
            </Body>
            
            <Frame>
                <Fire to="/talks/fire-safety">
                    <MenuTitle>Fire Safety</MenuTitle>
                </Fire>
                <Consent to="/talks/respect-consent">
                    <MenuTitle>Respect and Consent</MenuTitle>
                </Consent>
                <Safety to="/talks/health-safety">
                    <MenuTitle>Health and Safety</MenuTitle>
                </Safety>
            </Frame>
        </>
    );
}