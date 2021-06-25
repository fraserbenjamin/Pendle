import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';

import { useAnalytics } from "../components/Firebase";
import EventsView from '../components/timetable/EventsView';
import LoadingCard from "../components/LoadingCard";

const Frame = tw.div`flex justify-center p-3`;
const Container = tw.div`w-full bg-white font-effra h-full shadow-md max-w-4xl p-3 flex flex-col`;
const Title = tw.div`font-semibold pt-3 text-lg`;
const Body = tw.div`my-2 mb-3`;
const Button = tw.button`flex-grow bg-pendle-green text-white rounded p-2 my-3`;

export default () => {
    const analytics = useAnalytics();
    const jsonUrl = `https://spreadsheets.google.com/feeds/cells/18ih0m-7zKLZtcsTwCaL3mXHZAMnrhCoQhJmavOM6CzQ/1/public/full?alt=json`;
    const docUrl = `https://docs.google.com/spreadsheets/d/18ih0m-7zKLZtcsTwCaL3mXHZAMnrhCoQhJmavOM6CzQ/edit?usp=sharing`;
    const [requestState, setRequestState] = useState("idle");
    const [sheet, setSheet] = useState(null);
    const [member, setMember] = useState("");

    analytics.logEvent('page_view', {
        page_title: 'Timetable',
    });

    const getTimetable = async (signal) => {
        setRequestState("loading");

        try {
            const response = await fetch(jsonUrl, {
                signal,
                headers: new Headers({
                    "content-type": "application/json",
                    accept: "application/json",
                }),
            });

            if (response.ok) {
                const body = await response.json();
                setRequestState("success");
                setSheet(body?.feed?.entry);
            } else {
                setRequestState("error");
            }
        } catch (e) {
            console.error(e);
            setRequestState("error");
        }
    }

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        getTimetable(signal);
        const interval = setInterval(() => {
            getTimetable(signal);
        }, 30 * 60 * 1000);

        return () => {
            controller.abort();
            clearInterval(interval);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const cellToData = (cell) => {
        return {
            content: cell.content.$t,
            col: cell.gs$cell.col,
            row: cell.gs$cell.row,
        }
    }

    const cellToTime = ({ row }) => {
        const search = sheet.filter(cell => cell.gs$cell.col === "2" && cell.gs$cell.row === row);

        if (Array.isArray(search) && search.length > 0) {
            return cellToData(search[0]).content;
        }

        return null;
    }

    const cellToDate = ({ row }) => {
        const dates = sheet.filter(cell => cell.gs$cell.col === "1" && cell.gs$cell.row > 1).map(cellToData);
        let result = null;

        dates.forEach(date => {
            if (parseInt(row) >= parseInt(date.row)) {
                result = date.content;
            }
        });

        return result;
    }

    const dayObjects = sheet ? sheet.filter(cell => cell.gs$cell.col === "1" && cell.gs$cell.row > 1) : [];
    const days = dayObjects.map(cellToData);
    console.log({ days })

    let jcrObjects = sheet ? sheet.filter(cell => cell.gs$cell.row === "1" && cell.gs$cell.col > 6) : [];
    jcrObjects = jcrObjects.map(cell => {
        return {
            name: cell.content.$t,
            col: cell.gs$cell.col,
            row: cell.gs$cell.row,
            events: sheet.filter(eventCell => cell.gs$cell.col === eventCell.gs$cell.col && eventCell.gs$cell.row > 1).map(cellToData),
        }
    });
    const jcr = jcrObjects.map(item => {
        return {
            name: item.name,
            events: item.events.map(event => {
                return {
                    ...event,
                    time: cellToTime(event),
                    date: cellToDate(event),
                }
            })
        }
    });

    const activeJcr = () => {
        if (member && Array.isArray(jcr) && jcr.length > 0 && jcr.filter(item => item.name === member).length > 0) {
            return jcr.filter(item => item.name === member)[0]
        }

        return null;
    }

    if (requestState === "loading") return (
        <Frame>
            <div tw="w-full max-w-4xl">
                <LoadingCard />
            </div>
        </Frame>
    );

    if (requestState === "error") return (
        <Frame>
            <Container>
                <Title>Sorry, we were unable to load your timetable. Please try again or contact Fraser for support.</Title>

                <Button onClick={() => window.open(docUrl)}>Full Timetable</Button>
            </Container>
        </Frame>
    );

    return (
        <Frame>
            <Container>
                <Title>Timetable</Title>
                <Body>
                    View your personal events calendar.
                </Body>

                <select value={member} onChange={(e) => setMember(e.target.value)} tw="p-3 border border-gray-500">
                    <option value="">Select a team member</option>
                    {jcr.map((item, i) => <option key={i} value={item.name}>{item.name}</option>)}
                </select>

                {activeJcr() ? <EventsView events={activeJcr().events} /> : null}

                <Button onClick={() => window.open(docUrl)}>Full Timetable</Button>
            </Container>
        </Frame>
    );
}
