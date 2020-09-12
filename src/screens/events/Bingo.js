import React, {useContext, useState} from 'react';
import tw from 'twin.macro';
import {useLocation, Route, Switch} from "react-router-dom";

import EventsContext from "../../context/eventsContext";

import Tag from "../../components/ui/Tag";
import FacebookButton from '../../components/ui/FacebookButton';

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3`;
const Title = tw.div`font-semibold pt-3 text-lg`;
const Body = tw.div`flex flex-col`;

export default () => {

    return (
        <Switch>
            <Route path="/event/bingo/generate" component={Generator}/>
            <Route component={Page}/>
        </Switch>
    );

}

const Page = () => {
    const {events} = useContext(EventsContext);
    const location = useLocation();
    const event = events.filter(item => `/event/${item.path}` === location.pathname.replace(/\/$/, ""))[0];
    const url = "https://www.facebook.com/events/363882388329650";

    return (
        <Frame>
            <Container>
                <Title>{event?.title}</Title>
                <Body>
                    {event?.description}
                    <br/><br/>
                    Click the link below and to see the event details.

                    <FacebookButton onClick={() => window.open(url, "_blank")}/>
                </Body>

                {event?.tags?.map((tag,i) => (
                    <Tag key={i}>{tag}</Tag>
                ))}
            </Container>
        </Frame>
  );
}

const Button = tw.button`bg-pendle-green text-white rounded-md m-1 py-3`;

const Generator = () => {
    const [numbers, setNumbers] = useState([]);
    const max = 100;    //0-99


    const getRandom = () => {
        return Math.floor(Math.random() * max);
    }

    const uniqueRandom = () => {
        if(numbers.length === max) return null;

        let value = getRandom();

        while(numbers.includes(value)) {
            value = getRandom();
        }

        return value;
    }

    const addNumber = () => {
        let newRandom = uniqueRandom();

        if(newRandom) {
            setNumbers(prevState => [...prevState, uniqueRandom()])
        } else {
            window.alert("Max Size");
        }
    }

    return (
        <Frame>
            <Container>
                <Title>Random Generator</Title>
                <Body>
                    <div tw="break-all">{JSON.stringify(numbers)}</div>
                    <br/>
                    <br/>
                    <div tw="text-4xl">{numbers[numbers.length-1]}</div>

                    <Button onClick={addNumber}>Generate</Button>
                    <Button onClick={() => setNumbers([])}>Reset</Button>
                </Body>
            </Container>
        </Frame>
    );
}