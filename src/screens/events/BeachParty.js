import React, {useContext} from 'react';
import tw, {styled} from 'twin.macro';
import {useLocation} from "react-router-dom";

import EventsContext from "../../context/eventsContext";

import Tag from "../../components/ui/Tag";
import {useAnalytics} from "../../components/Firebase";

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg`;
const Body = tw.div`my-2 mb-8`;
const Player = styled.div`
    ${tw`w-full relative h-64 sm:h-auto mt-5`}
    padding-bottom: 56.25%;
`;
const Iframe = tw.iframe`absolute top-0 left-0 w-full h-full`;
const P = tw.p`my-2`;

export default () => {
    const {events} = useContext(EventsContext);
    const location = useLocation();
    const analytics = useAnalytics();

    analytics.logEvent('page_view', {
        page_title: 'Beach Party',
    });

    return (
        <Frame>
            <Container>
                <Title>Beach Party</Title>
                <Body>
                    <P>
                    We’re all sad that we’ve missed out on those classic summer parties due to the pandemic but we’ve come up with the next best thing: Our Ultimate Summer Playlist!
                    </P>
                    <P>
                    Feel free to have a listen with your flat or whatever it is you’re up to and send us in any songs you want added to make a huge playlist of songs that give you the best summer feeling.
                    </P>
                    <P>
                    Also, we’re running a competition alongside this. We want you to make your best summer/beach outfit from clothes and other items you’ve got lying around.
                    There’s a chance to win a prize so keep an eye on our social media to enter!
                    </P>

                    <Player>
                        <Iframe src="https://www.youtube.com/embed/videoseries?list=PL6B2iUJ3mVHF2_InUVLxaCde2FNFpyQFp" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
                    </Player>
                </Body>

                {events.filter(item => `/event/${item.path}` === location.pathname)[0]?.tags?.map((tag,i) => (
                    <Tag key={i}>{tag}</Tag>
                ))}
            </Container>
        </Frame>
  );
}
