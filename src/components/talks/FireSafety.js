import React, { useState, useEffect } from 'react';
import tw from 'twin.macro';
import {useHistory} from "react-router-dom";

import {useAnalytics} from "../Firebase";

import FireStairs from "../../assets/talks/fire-stairs.jpg";
import FireBuilding from "../../assets/talks/fire-building.jpg";
import FireCooker from "../../assets/talks/fire-cooker.jpg";
import FireCovered from "../../assets/talks/fire-covered-detector.jpg";
import FireDoor from "../../assets/talks/fire-door-open.jpg";
import FireExit from "../../assets/talks/fire-exit.jpg";
import FireCube from "../../assets/talks/fire-cube.png";
import FireGang from "../../assets/talks/fire-gang.png";
import FirePlugForeign from "../../assets/talks/fire-plug-foreign.png";
import FirePlugUK from "../../assets/talks/fire-plug-uk.png";
import FireAlarmPoint from "../../assets/talks/fire-alarm-point.png";
import FireExitSign from "../../assets/talks/fire-exit-sign.png";
import FireCovid from "../../assets/talks/fire-covid.png";
import FireExtinguisher from "../../assets/talks/fire-extinguisher.png";
import FireExtinguisherP50 from "../../assets/talks/fire-extinguisher-p50.png";
import FireBlanket from "../../assets/talks/fire-blanket.png";
import FireEmergencyRefuge from "../../assets/talks/fire-emergency-refuge.png";
import FireRefugeAction from "../../assets/talks/fire-refuge-action.png";
import YouTubeButton from '../ui/YouTubeButton';
import YouTubePopup from '../YouTubePopup';

const Container = tw.div`flex flex-col justify-center p-3`;
const Button = tw.button`bg-pendle-green text-white py-1 px-5 rounded-md`;

export default () => {
    const analytics = useAnalytics();
    const [currentSection, setCurrentSection] = useState(0);
    const [videoOpen, setVideoOpen] = useState(false);

    analytics.logEvent('page_view', {
        page_title: 'Fire Safety',
    });

    const Welcome = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Welcome</div>
            The following presentation will take you through the key areas of fire safety.
        </div>
    )

    const Section1 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Covered in this presentation</div>
            <ul tw="list-disc ml-5 text-lg">
                <li>Reduce the risk of fire Incidents happening, learning  from a fire incident</li>
                <li>Learn about basic fire procedures and means of escape</li>
                <li>What action to take if a fire alarm actuates or you discover a fire</li>
                <li>What to do if you have a disability</li>
                <li>Where you can find further information and guidance</li>
            </ul>
        </div>
    )

    const Section2 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Here are some Fire Facts</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li><b>Fire is FAST!</b> In less than 30 seconds a small flame can turn into a major fire. It only takes minutes for thick black smoke to fill a room or for it to be engulfed in flames.</li>
                <li><b>Fire is HOT!</b> Heat is more threatening than flames. Room temperatures in a fire can be 100 degrees at floor level and rise to 600 degrees at eye level. Inhaling this super-hot air will scorch your lungs and melt clothes to your skin.</li>
                <li><b>Fire is DARK!</b> Fire starts bright, but quickly produces black smoke and complete darkness.</li>
                <li><b>Fire is DEADLY!</b> Smoke and toxic gases kill more people than flames do. Fire produces poisonous gases that make you disoriented and drowsy. Asphyxiation is the leading cause of fire deaths, exceeding burns by a 3-to-1 ratio.</li>
                <li>This is why it is important to evacuate the building as quickly as possible, when you hear the fire alarm get out of the building and stay out, do not delay</li>
            </ul>

            <img src={FireStairs} tw="" alt="A group of people walking down stairs"/>
        </div>
    )

    const Section3 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Fire in Student Accommodation</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>Fire at Cube building in Bolton, the block was six storeys in height, the fire started at approx. 8.30 pm  on Friday 15th November 2019</li>
                <li>217 students in the building at the time of the fire</li>
                <li>2 students were rescued by the Greater Manchester Fire & Rescue Service, one student had a narrow escape from the 6th floor window before their flat burst into flames</li>
                <li>Not everyone responded to the fire alarm, so there was a delay in evacuating the building</li>
                <li>Severe disruption to student studies, loss of work, passports, visas and other personal belongings</li>
                <li>As to the cause – a discarded cigarette</li>
            </ul>

            <img src={FireBuilding} tw="" alt="A building on fire"/>
        </div>
    )

    const Section4 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Kitchen Fire Safety</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>Do not leave your cooking unattended and avoid being under the influence of alcohol when cooking. On a recent Sky news survey 60% students cook whilst drunk and 15% students fall asleep!</li>
                <li>Do clean your dirty grill pans, pans and cookers to stop a build up of grease otherwise any build-up can lead to ignition and fire</li>
                <li>Do keep the area tidy and clear of kitchen waste and keep rubbish bags away from ovens </li>
                <li>Cooker hobs retain heat long after use, do not place electric kettles and other appliances on top of the hob</li>
                <li>Do not use chip pans or deep fat fryers – they are banned.</li>
                <li>Make sure that the fans are on and not switched off and open windows where possible, to disperse any cooking smoke and fumes. This will help prevent an unwanted fire alarm</li>
                <li>Importantly do not cook in your bedroom</li>
            </ul>

            <img src={FireCooker} tw="" alt="A cooker on fire"/>
        </div>
    )

    const Section5 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Forbidden Items</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>Tea lights and candles</li>
                <li>Oil Lamps</li>
                <li>Aromatherapy oil burners</li>
                <li>Fondue sets</li>
                <li>Candles</li>
                <li>Anything which requires bottled gas</li>
                <li>Additional heaters</li>
                <li>Consult your<a tw="underline" href="https://www.lancaster.ac.uk/media/lancaster-university/content-assets/documents/accommodation/residentshandbook.pdf" target="_blank" rel="noopener noreferrer"> handbook</a> for further information</li>
            </ul>

        </div>
    )

    const Section6 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Smoking and Vaping</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>Smoking and ‘vaping’ is strictly prohibited in all residences</li>
                <li>And….so is covering up a detector! In fact it is a criminal offence</li>
                <li>You can be disciplined under University rules  inside a building and some signed external areas</li>
                <li>Fires caused by smoking result in more fatalities than any other cause</li>
                <li>Smoking/vaping underneath a detector will set off the alarm and everyone will need to evacuate the building</li>
            </ul>

            <img src={FireCovered} tw="" alt="A covered fire detector"/>
        </div>
    )

    const Section7 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Fire Doors</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>Fire doors are there for your protection they are designed to hold fire and smoke back so you can make your escape</li>
                <li>They have self closing devices and smoke and heat seals fitted</li>
                <li>Never tamper with a self closer or hang items from it, do not damage fire doors or they will not protect you!</li>
                <li>Do not prop fire doors open – do this and you could allow a fire to spread and prevent others from escaping!</li>
                <li>Image shows a fire door being propped open by a door stop making the fire door ineffective</li>
            </ul>

            <img src={FireDoor} tw="" alt="Fire door propped open"/>
        </div>
    )

    const Section8 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Fire Exits and Exit Routes</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>Keep your escape route clear, this is to prevent a build up of combustible materials and avoids tripping hazards</li>
                <li>In an emergency it is common to find that people usually exit the same way they entered the building</li>
                <li>Become familiar with your building exit routes try and walk them and find the alternative exits. This has saved lives in building fire incidents</li>
                <li>Get to know your building assembly point</li>
                <li>The photo shows a cluttered escape route</li>
            </ul>

            <img src={FireExit} tw="" alt="Fire exit with items restricting the path"/>
        </div>
    )

    const Section9 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Human Behaviour – Why people fail to evacuate</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>Peer pressure looking for someone else to take the lead and escape</li>
                <li>Cultural…wait to be told to evacuate</li>
                <li>Fire alarm fatigue – fire alarm continually going off and becoming complacent </li>
                <li>Physically or mentally unable to – disabled people needing assistance </li>
                <li>Ignorance – lack of response and understanding </li>
            </ul>
        </div>
    )

    const Section10 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Electrical Hazards Part 1</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>Avoid charging your electrical equipment at night. Vapes have been known to explode and cause serious fires. </li>
                <li>Faulty device batteries can overheat. Do not leave curling tongs on combustible surfaces or laptops on your bedding</li>
                <li>The first picture shows a cube adaptor. Do not use these, they come away from the power socket and can cause fires by short-circuiting</li>
                <li>The bottom photo shows a gang adaptor which is safe to use, just don’t overload it! Or daisy chain them together!</li>
            </ul>

            <div tw="flex">
                <img src={FireCube} tw="" alt="Cube adapter"/>
                <img src={FireGang} tw="" alt="Gang adapter"/>
            </div>
        </div>
    )

    const Section11 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Electrical Hazards Part 2</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>If you have non-UK electrical equipment DO NOT assume a ‘UK adaptor’ is safe.</li>
                <li>Make sure the plug carries the CE safety label and you purchase form a reliable stockist</li>
                <li>Talk to your College Accommodation manager if you have any concerns</li>
            </ul>

            <div tw="flex">
                <img src={FirePlugForeign} tw="" alt="Foreign Plug"/>
                <img src={FirePlugUK} tw="" alt="UK Plug"/>
            </div>
        </div>
    )

    const Section12 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Emergency Procedures if you discover a fire</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>Raise the alarm by operating the nearest fire alarm call point</li>
                <li>Leave and close doors behind you and get out of the building</li>
                <li>Do not collect personal belongings</li>
                <li>Leave by the <u>nearest</u> exit</li>
                <li>When you are out of the building go to the assembly point for your building.</li>
                <li>Due to Covid 19 you must keep a 2m physical safe distance from others at the assembly point. The Security & Portering team will enforce this provision where necessary.</li>
                <li>We would also recommend the wearing of face coverings whilst escaping from the building</li>
            </ul>

            <div tw="flex">
                <img src={FireAlarmPoint} tw="" alt="Fire Alarm Point"/>
                <img src={FireExitSign} tw="" alt="Emergency Exit Sign"/>
            </div>
        </div>
    )

    const Section13 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Emergency Procedures when the Fire Alarm Sounds</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>Leave the building</li>
                <li>Always, always, always leave the building</li>
                <li>Leave by the NEAREST exit</li>
                <li>If you can – close windows and doors on the way out</li>
                <li>Go to the assembly point – <span tw="text-green-600 font-medium">remember to keep a safe distance from others and wash your hands on re occupation</span></li>
                <li>DO NOT Collect belongings</li>
                <li>DO NOT use a lift</li>
                <li>DO NOT re-enter the building until you are told it is safe to do so</li>
            </ul>

            <img src={FireCovid} tw="" alt="Covid Social Distancing Graphic"/>
        </div>
    )

    const Section14 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Fire Evacuation</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>When the fire alarm sounds you must evacuate the building. No ifs or buts! You must respond promptly delay can lead to loss of life</li>
                <li>Don’t assume it’s a false alarm or system fault, or its only a fire drill! real fire incidents have happened during a fire drill!</li>
                <li>You could face disciplinary action for not evacuating a building in good time</li>
                <li>You must evacuate during a fire drill!</li>
            </ul>
        </div>
    )

    const Section15 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Fire Fighting Equipment</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>IS NOT for your use – trained personnel will need to use it if necessary</li>
                <li>DO NOT tamper with this equipment as it always needs to be in good working order in the event that it is needed to put out a fire</li>
            </ul>

            <div tw="flex overflow-y-auto">
                <img src={FireExtinguisherP50} tw="" alt="Fire Extinguisher"/>
                <img src={FireBlanket} tw="" alt="Fire Blanket"/>
                <img src={FireExtinguisher} tw="" alt="Fire Extinguisher"/>
            </div>
        </div>
    )

    const Section16 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Assisted Evacuation – for Disabled users</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>If you usually require the use of a lift to go about your normal daily life you will not be able to use these when the fire alarm is sounding.</li>
                <li>Move to an enclosed staircase or a refuge point and summon assistance. You are now in a safe temporary waiting area</li>
                <li>To summon assistance press the intercom button this will connect to Security. speak clearly into the microphone.  the line will stay open until reset by security.</li>
                <li>Contact 01524594541 if you need further assistance or if there is no intercom in he enclosed staircase</li>
                <li>Porters and security will check these areas in case someone requires assistance, however this may take time in a large building</li>
            </ul>

            <div tw="flex overflow-y-auto">
                <img src={FireEmergencyRefuge} tw="" alt="Emergency Refuge Call Point"/>
                <img src={FireRefugeAction} tw="" alt="Refuge Action Explanation"/>
            </div>
        </div>
    )

    const Section17 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Accidental Alarm Activations</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>For your safety there are detectors in all kitchens, bedrooms and corridors</li>
                <li>Smoke detectors are easily activated by the slightest hint of smoke, steam and other particles</li>
                <li>If you accidentally activate the alarm you MUST leave the building and follow the emergency procedures – YES even if you know it was your fault!!</li>
            </ul>
        </div>
    )

    const Section18 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Tips on How to Avoid Accidental Fire Alarm Activations</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>Kitchens – never leave cooking unattended and keep your pans and cooker clean and grease free</li>
                <li>Do not smoke or vape in University buildings</li>
                <li>Avoid using hairdryers and straighteners directly under a detector head</li>
                <li>Take special care when using aerosols – deodorant, hairspray, air fresheners etc.</li>
                <li>Make sure the steam from your shower has subsided before you exit the shower</li>
            </ul>
        </div>
    )

    const Section19 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">In summary</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>You must do your bit to prevent fires</li>
                <li>Always stay with your food when cooking</li>
                <li>Make sure your electrical appliances are in good working order and you are using the correct extension leads and adaptors</li>
                <li>Only smoke and vape outside university buildings and in areas where smoking is permitted</li>
                <li>Don’t tamper with any equipment designed to support fire safety systems</li>
                <li>Never prop open Fire Doors</li>
                <li>When the alarms sound leave the building every time no question, no hesitation.</li>
                <li>If you discover a fire – Raise the alarm by operating a fire alarm call point and leave the building by the nearest exit</li>
                <li>Remember to keep a safe distance from others at the assembly point</li>
            </ul>
        </div>
    )

    const Section20 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">So just in case you weren't taking notice…..A reminder about Cooking!!!</div>
            Please click the button below to watch the video.

            {videoOpen && <YouTubePopup id="DI2oboY2Jl0" close={() => setVideoOpen(false)}/>}
            <YouTubeButton onClick={() => setVideoOpen(true)}/>
        </div>
    )

    const Section21 = (
        <div>
            <div tw="text-lancaster-red font-bold text-xl">Finally</div>
            <ul tw="list-disc ml-5 text-lg mb-5">
                <li>If you want to be reminded of any of the elements of this talk please sign up for the <a href="https://modules.lancaster.ac.uk/enrol/index.php?id=6083" target="_blank" rel="noopener noreferrer" tw="text-orange-500 underline">Moodle on Fire Safety.</a></li>
                <li>Remember there is important fire & Health and safety advice & guidance contained in your <a tw="underline" href="https://www.lancaster.ac.uk/media/lancaster-university/content-assets/documents/accommodation/residentshandbook.pdf" target="_blank" rel="noopener noreferrer">Residents handbook</a></li>
            </ul>

            Make sure you've completed the other introductions too!
        </div>
    )

    const sections = [Welcome, Section1, Section2, Section3, Section4, Section5, Section6, Section7, Section8, Section9, Section10, Section11, Section12, Section13, Section14, Section15, Section16, Section17, Section18, Section19, Section20, Section21];

    useEffect(() => {
        analytics.logEvent('page_view', {
            page_title: `Fire Safety ${currentSection}`,
        });
    }, [currentSection])

    const history = useHistory();

    return (
        <Container>
            <div tw="mb-8">
                <Button onClick={() => history.push("/talks")}>Back to All Introductions</Button>
            </div>

            {sections[currentSection]}

            <div tw="flex justify-between mt-8">
                <Button onClick={() => (currentSection > 0) ? setCurrentSection(prevSection => prevSection - 1) : null} style={(currentSection > 0) ? {} : tw`bg-gray-400 text-black cursor-not-allowed`}>Previous</Button>
                {(currentSection < sections.length-1) && <Button onClick={() => (currentSection < sections.length-1) ? setCurrentSection(prevSection => prevSection + 1) : null}>Next</Button>}
            </div>
        </Container>
  );
}