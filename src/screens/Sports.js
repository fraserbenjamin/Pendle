import React, { useState, useEffect } from 'react';
import tw from 'twin.macro';
import Gallery from 'react-grid-gallery';
import Grid from '../components/photo-grid';
import {useFirebase} from '../components/Firebase';
const firebase = useFirebase();

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg`;
const Body = tw.div`my-2 mb-8`;

export default () => {
    const [images, setImages] = useState([]);
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var listRef = storageRef.child('Gallery/Sports');


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
    }, []);

    return (
        <Frame>
            <Container>
                <Title>Sports</Title>
                <Body>
                Pendle has a wide variety of successful sporting teams. Last year alone, we won the A team football summer cup, were runners up in the table tennis and A team netball leagues, as well as winning the George Wyatt trophy as university bar sports champions for the third consecutive year!
                <br/><br/>
                As well as our very successful teams, there is plenty of opportunity to get involved with recreational sports, with our weekly Wednesday Workout sessions all about participation, as well as casual leagues for sports such as pool throughout the first term to give all Pendle students a chance to get involved!
                <br/><br/>
                Here's a list of college sports:
                <ul>
                    <li>Football</li>
                    <li>Netball</li>
                    <li>Table Tennis</li>
                    <li>Darts</li>
                    <li>Pool</li>
                    <li>Dominos</li>
                </ul>
                </Body>

                {/* <Gallery images={images} enableLightbox={true} enableImageSelection={false}/> */}

                <Grid
                    images={images}
                    rowHeight={200}
                    margin={5}
                    width={800}
                />
            </Container>
        </Frame>
  );
}
