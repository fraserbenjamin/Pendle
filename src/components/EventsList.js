import React, {useContext, useMemo} from 'react';
import tw, {styled} from 'twin.macro';
import moment from "moment";

import EventsContext from '../context/eventsContext';

import EventCard from "../components/EventCard";

//const Container = tw.div`w-full bg-pendle-green flex flex-row whitespace-no-wrap overflow-x-auto`;
const Container = styled.div`
    ${tw`w-full h-auto grid gap-4 p-3 overflow-y-auto`}
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const DateCard = tw.div`w-full bg-pendle-green text-white text-3xl p-3 font-effra h-full shadow-md flex flex-col justify-end`
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
        <Container>
            {dates.map((date, i) => {
                return (
                    <React.Fragment key={i}>
                        <DateCard>
                            <Title>{moment(date).format("dddd, Do MMMM")}</Title>
                        </DateCard>
                        {filter[date].map((event, j) => <EventCard key={j} data={event}></EventCard>)}
                    </React.Fragment>
                );
            })}
        </Container>
    );
}