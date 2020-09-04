import React, { useState } from 'react';
import tw from 'twin.macro';
import {useHistory} from "react-router-dom";

import {useAnalytics} from "../Firebase";

import YouTubeButton from '../ui/YouTubeButton';
import YouTubePopup from '../YouTubePopup';

const Container = tw.div`flex flex-col justify-center p-3`;
const Button = tw.button`bg-pendle-green text-white py-1 px-5 rounded-md`;

export default () => {
    const analytics = useAnalytics();
    const [currentSection, setCurrentSection] = useState(0);

    analytics.logEvent('page_view', {
        page_title: 'Fire Safety',
    });

    const history = useHistory();
    const totalSections = 3;

    return (
        <Container>
            <div tw="mb-8">
                <Button onClick={() => history.push("/talks")} tw="bg-pendle-yellow text-black font-medium">Back to All Introductions</Button>
            </div>

            {currentSection === 0 && <Welcome/>}
            {currentSection === 1 && <PrimaryVideo/>}
            {currentSection === 2 && <CookingVideo/>}
            {currentSection === 3 && <Links/>}

            <div tw="flex justify-between mt-8">
                <Button onClick={() => (currentSection > 0) ? setCurrentSection(prevSection => prevSection - 1) : null} style={(currentSection > 0) ? {} : tw`bg-gray-400 text-black cursor-not-allowed`}>Previous</Button>
                {(currentSection < totalSections) && <Button onClick={() => (currentSection < totalSections) ? setCurrentSection(prevSection => prevSection + 1) : null}>Next</Button>}
            </div>
        </Container>
  );
}

const Welcome = () => {
    const analytics = useAnalytics();

    analytics.logEvent('page_view', {
        page_title: 'Fire Safety Welcome',
    });

    return (
        <div>
            <div tw="text-pendle-green font-bold text-xl">Welcome</div>
            The following is a series of videos designed to teach you about fire safety and help keep you and others safe.
        </div>
    );
}

const PrimaryVideo = () => {
    const analytics = useAnalytics();
    const [videoOpen, setVideoOpen] = useState(false);

    analytics.logEvent('page_view', {
        page_title: 'Fire Safety Presentation',
    });

    return (
        <div>
            <div tw="text-pendle-green font-bold text-xl">Fire Safety Essentials</div>
            The following presentation by Gary Seekins will take you through the key areas of fire safety you need to know.

            {videoOpen && <YouTubePopup id="sjGFYhgenXY" close={() => setVideoOpen(false)}/>}
            <YouTubeButton onClick={() => setVideoOpen(true)}/>
        </div>
    );
}

const CookingVideo = () => {
    const analytics = useAnalytics();
    const [videoOpen, setVideoOpen] = useState(false);

    analytics.logEvent('page_view', {
        page_title: 'Fire Safety Cooking Video',
    });

    return (
        <div>
            <div tw="text-pendle-green font-bold text-xl">So just in case you weren't taking notice... A reminder about Cooking!</div>
            This video video tells the story of a man's return home after a night out with friends, and how his hunger pangs lead him to dice with death, before being saved by fire angels.

            {videoOpen && <YouTubePopup id="DI2oboY2Jl0" close={() => setVideoOpen(false)} autoplay={false}/>}
            <YouTubeButton onClick={() => setVideoOpen(true)}/>
        </div>
    );
}

const Links = () => {
    const analytics = useAnalytics();

    analytics.logEvent('page_view', {
        page_title: 'Fire Safety Links',
    });

    return (
        <div>
            <div tw="text-pendle-green font-bold text-xl">Finally</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>If you want to be reminded of any of the elements of this talk please sign up for the <a href="https://modules.lancaster.ac.uk/enrol/index.php?id=6083" target="_blank" rel="noopener noreferrer" tw="text-orange-500 underline">Moodle on Fire Safety.</a></li>
                <li>Remember there is important fire & Health and safety advice & guidance contained in your <a tw="underline" href="https://www.lancaster.ac.uk/media/lancaster-university/content-assets/documents/accommodation/residentshandbook.pdf" target="_blank" rel="noopener noreferrer">Residents handbook</a></li>
                <li>Be sure to complete out the other training sessions too!</li>
            </ul>
        </div>
    );
}