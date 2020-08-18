import React, {useContext, useMemo} from 'react';
import tw, {styled} from 'twin.macro';
import moment from "moment";

import EventsContext from '../context/eventsContext';

import EventCard from "../components/EventCard";

//const Container = tw.div`w-full bg-pendle-green flex flex-row whitespace-no-wrap overflow-x-auto`;
const Container = tw.div`w-full`;
const Row = styled.div`
    ${tw`w-full h-auto grid gap-4 p-3 overflow-y-auto`}
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
const Section = tw.div``;
const Header = tw.div`ml-5 font-bold mt-3`;

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
    })

    const filter = useMemo(() => {
        let result = {};

        dates.forEach(date => {
            result[date] = events.filter(item => moment(item.start?.toDate()).isSame(moment(date), 'day'));
        });
        return result;
    }, [events]);

    return (
        <Container>
            {dates.map((date, i) => {
                return (
                    <Section key={i}>
                        <Header>{moment(date).format("dddd, Do MMMM")}</Header>
                        <Row>
                            {filter[date].map((event, j) => <EventCard key={j} data={event}></EventCard>)}
                        </Row>
                    </Section>
                );
            })}
        </Container>
    );
}