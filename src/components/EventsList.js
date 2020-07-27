import React, {useContext} from 'react';
import tw, {styled} from 'twin.macro';

import EventsContext from '../context/eventsContext';

import EventCard from "../components/EventCard";

//const Container = tw.div`w-full bg-pendle-green flex flex-row whitespace-no-wrap overflow-x-auto`;
const Container = styled.div`
    ${tw`w-full h-full grid gap-4 p-3 overflow-y-auto`}
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

export default () => {
    const {events} = useContext(EventsContext);

    return (
        <Container>
            {events.map((event, i) => (
                <EventCard key={i} data={event}></EventCard>
            ))}
        </Container>
    );
}