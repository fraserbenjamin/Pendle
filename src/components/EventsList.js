import React, {useContext, useMemo} from 'react';
import tw, {styled} from 'twin.macro';
import moment from "moment";
import { motion } from "framer-motion";

import EventsContext from '../context/eventsContext';
import TShirtsPNG from "../assets/events/tshirts.png"

import EventCard from "../components/EventCard";

//const Container = tw.div`w-full bg-pendle-green flex flex-row whitespace-no-wrap overflow-x-auto`;
const Container = styled.div`
    ${tw`w-full h-auto grid gap-4 p-3 pt-0 overflow-y-auto bg-gray-100`}
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
const url = `https://lancastersu.co.uk/colleges/pendle/events/pendle-college-freshers-shirts-2020-37b3`;

const Title = tw.div`font-semibold`;

export default () => {
    const {events} = useContext(EventsContext);

    const dates = useMemo(() => {
        let datesSet = new Set();
        events.forEach(item => {
            if(item.start) {
                datesSet.add(moment(item.start.toDate()).format("YYYY-MM-DD"));
            }
        });

        return Array.from(datesSet).sort((a, b) => moment(a).diff(moment(b)));
    }, [events]);

    const filter = useMemo(() => {
        let result = {};

        dates.forEach(date => {
            result[date] = events.filter(item => moment(item.start?.toDate()).isSame(moment(date), 'day'));
        });
        return result;
    }, [events, dates]);

    return (
        <>
        <div tw="bg-white shadow border border-2 border-pendle-yellow m-3 font-medium p-3 cursor-pointer flex" onClick={() => window.open(url, "_blank")}>
            <img tw="w-16 h-16" src={TShirtsPNG} alt="T-Shirts Sales"/>
            <div tw="ml-5 flex items-center text-lg">Welcome Week T-Shirts are now available to buy, tap here for more details!</div>
        </div>
        <Container>
            {dates.map((date, i) => {
                return (
                    <React.Fragment key={i}>
                        <DateCard date={date}/>
                        {filter[date].map((event, j) => <EventCard key={j} data={event}></EventCard>)}
                    </React.Fragment>
                );
            })}
        </Container>
        </>
    );
}

const Frame = tw(motion.div)`w-full bg-pendle-green text-white text-3xl p-3 font-effra h-full shadow flex flex-col justify-end`

const DateCard = ({date}) => {
    return (
        <Frame
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.1 }}
        >
            <Title>{moment(date).format("dddd")}</Title>
            <Title>{moment(date).format("Do MMMM")}</Title>
        </Frame>
    )
}