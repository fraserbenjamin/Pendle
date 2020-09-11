import React, { useState, useEffect } from 'react';
import tw from 'twin.macro';
import useDimensions from 'react-use-dimensions';

import {useAnalytics} from "../components/Firebase";

import Grid from '../components/photo-grid';
import {useFirebase} from '../components/Firebase';
import InstragramButton from '../components/ui/InstragramButton';
const firebase = useFirebase();

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold mt-3 text-lg`;
const Body = tw.div`my-2 mb-8`;
const PhotoGrid = tw.div`overflow-hidden`;

export default () => {
    const [images, setImages] = useState([]);
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var listRef = storageRef.child('Gallery/Sports');
    const [gridRef, gridSize] = useDimensions();
    const analytics = useAnalytics();

    analytics.logEvent('page_view', {
        page_title: 'Sports',
    });

    useEffect(() => {
        listRef.listAll().then(function(res) {
            let promises = [];

            res.items.forEach(function(itemRef) {
                promises.push(new Promise(async resolve => {
                    var img = new Image();
                    let imageURL = await itemRef.getDownloadURL();
                    img.src = imageURL;
                    
                    img.onload = function() {
                        resolve({
                            src: imageURL,
                            thumbnail: imageURL,
                            width: img.width,
                            height: img.height,
                        });
                    }
                }));
            });

            Promise.all(promises).then((result) => {
                setImages(result)
            });
        }).catch(function(error) {
            // Uh-oh, an error occurred!
        });
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, []);

    return (
        <Frame>
            <Container>
                <div tw="text-2xl font-bold">Sports</div>
                <Body>
                Pendle has a wide variety of successful sporting teams. Last year alone, the netball A team won the league and were headed to Roses to represent Lancaster against York. The women's pool team and the new Pendle rugby team also finished top of their leagues, with table tennis, women's darts and dominoes coming runners up and A team football finishing third. On top of this, Pendle is known for its outstanding barsports and has won the George Wyatt Trophy five out of the last seven years.
                <br/><br/>
                As well as our very successful sports teams, Pendle is also known on campus for its supporters. The community and friendships between all the Pendle college sports members sets Pendle apart from the other colleges.
                <br/><br/>
                Pendle Cup is a sporting event exclusive to Pendle and is a great way to bring competition alive in the second term, once Freshers have settled into their teams. It allows the sports teams to go head to head to battle for the championship through playing each other at all the college sports. Netballers against Darts players playing football. You wouldn't want to miss it.
                <br/><br/>
                Finally, Warriors is a big end of year sporting competition between Pendle and Grizedale. It is a celebration of the sporting year and offers a fun outlet for those getting ready for summer term exams. Here, not only are the college sports involved, but also other sports, such as basketball or hockey. The sports offer opportunities for everyone to get involved, regardless of ability or knowledge of the game, so it provides the perfect mix of competitiveness and sociability. If you're not overly sporty though, there is still a chance to get involved throughout the Warriors weekend, by buying Pendle merch to show college pride, as well as participating in the non-sports events such as the Warriors Pub Quiz, various eating competitions and more! There's a space for everyone to get involved!
                </Body>

                <div tw="text-2xl font-bold">Teams and Captains</div>
                <Captains/>

                <div tw="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
                    <InstragramButton onClick={() => window.open("https://www.instagram.com/pendlecollegesport/", "_blank")}>@pendlecollegesport</InstragramButton>
                    <InstragramButton onClick={() => window.open("https://www.instagram.com/pendlenetball/", "_blank")}>@pendlenetball</InstragramButton>
                    <InstragramButton onClick={() => window.open("https://www.instagram.com/pendlecollegefc/", "_blank")}>@pendlecollegefc</InstragramButton>
                </div>

                <div tw="text-2xl font-bold mb-5">Gallery</div>
                <PhotoGrid ref={gridRef}>
                    <Grid
                        images={images}
                        rowHeight={200}
                        margin={5}
                        width={Math.floor(gridSize.width)}
                    />
                </PhotoGrid>
            </Container>
        </Frame>
  );
}

const Group = tw.div`bg-white shadow-md m-2 p-3 border border-pendle-green`;

const Captains = () => {
    return (
        <div tw="grid grid-cols-1 md:grid-cols-3">
            <Group>
                <Title>Pool</Title>
                Women's Captain - Megan Liddell<br/>
                Men's As Captain - Ruairi Webb<br/>
                Men's Bs Captain - Elliot Mills<br/> 
            </Group>
            <Group>
                <Title>Darts</Title>
                Women's Captain - Awaiting Outcome<br/>
                Men's Captain - Elliot Mills<br/>
            </Group>
            <Group>
                <Title>Dominoes</Title>
                Captain - Mark Dearden<br/>
            </Group>
            <Group>
                <Title>Table Tennis</Title>
                Captain - Toma Madansky<br/>
            </Group>
            <Group>
                <Title>Netball</Title>
                A Team Captain - Becky Lynch<br/>
                B Team Captain - Georgia Whelan<br/>
                C Team Captain - Rachael Williams<br/>
                Rec Team Captains - Kirsty Whittle and Megan Liddell<br/>
            </Group>
            <Group>
                <Title>Football</Title>
                A Team Captains - Tim Bryce & Kareem Shah<br/>
                B Team Captain - Elliot Chesters<br/>
                C Team Captain - Dan Horrocks<br/>
                D Team Captain - Bilal Ibrahim<br/>
            </Group>
        </div>
    )
}