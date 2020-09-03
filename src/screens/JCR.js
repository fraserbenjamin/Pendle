import React from 'react';
import tw, {styled} from 'twin.macro';

import {useAnalytics} from "../components/Firebase";

import Lewis from "../assets/jcr/lewis.jpg";
import Fraser from "../assets/jcr/fraser.jpg";
import Megan from "../assets/jcr/megan.jpg";
import Lydia from "../assets/jcr/lydia.jpg";
import Marc from "../assets/jcr/marc.jpg";
import Billie from "../assets/jcr/billie.jpg";
import Thomas from "../assets/jcr/thomas.jpg";
import Yifei from "../assets/jcr/yifei.jpg";
import Simon from "../assets/jcr/simon.jpg";
import Laura from "../assets/jcr/laura.jpg";
import Jacob from "../assets/jcr/jacob.jpg";

const Container = styled.div`
    ${tw`flex justify-center p-3 max-w-4xl grid mx-auto gap-3 w-full`}
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export default () => {
    const analytics = useAnalytics();

    analytics.logEvent('page_view', {
        page_title: 'JCR',
    });


    return (
        <Container>

            <JCRCard name="Lewis Powell" role="President" email="l.j.powell2@lancaster.ac.uk" image={Lewis}/>
            <JCRCard name="Jacob Ackerley" role="VP Events & Engagement" email="j.ackerley@lancaster.ac.uk" image={Jacob}/>
            <JCRCard name="Lydia Bellis" role="VP Welfare & Education" email="l.bellis@lancaster.ac.uk" image={Lydia}/>
            <JCRCard name="Billie Harris" role="General Secretary" email="b.harris2@lancaster.ac.uk" image={Billie}/>
            <JCRCard name="Yifei Zhong" role="Welfare Officer (Self-defining Woman)" email="y.zhong3@lancaster.ac.uk" image={Yifei}/>
            <JCRCard name="Simon Arnold" role="Welfare Officer (Self-defining Man)" email="arnolds@lancaster.ac.uk" image={Simon}/>
            <JCRCard name="Marc Dubois" role="Events Officer" email="duboism@lancaster.ac.uk" image={Marc}/>
            <JCRCard name="Tom Whitfield" role="Events Officer" email="t.whitfield@lancaster.ac.uk" image={Thomas}/>
            <JCRCard name="Megan Liddell" role="Sports Officer (Self-defining Woman)" email="m.g.liddell@lancaster.ac.uk" image={Megan}/>
            <JCRCard name="Fraser Benjamin" role="Audio-Visual Technician" email="f.benjamin@lancaster.ac.uk" image={Fraser}/>
            <JCRCard name="Laura Smith" role="Media & Communications Officer" email="l.smith25@lancaster.ac.uk" image={Laura}/>

        </Container>
  );
}

const Card = tw.div`bg-white font-effra h-full shadow-md p-3 flex flex-row`;
const Profile = tw.img`rounded-full w-16 h-16 object-cover`;
const Details = tw.div`flex flex-col ml-3 overflow-x-auto`;
const Name = tw.div`font-bold pt-2`;
const Email = tw.a`underline`;


const JCRCard = ({name, role, email, image}) => {
    return (
        <Card>
            <Profile src={image}/>
            <Details>
                <Name>{name} - {role}</Name>
                <Email href={`mailto:${email}`}>{email}</Email>
            </Details>
        </Card>
    )
}
