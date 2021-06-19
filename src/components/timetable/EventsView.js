import React from 'react';
import 'twin.macro';

export default ({ events }) => {

    const groups = events.reduce((groups, event) => {
        const date = event.date;

        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(event);
        return groups;
    }, {});

    const dates = Object.keys(groups);

    return (
        <div>
            {dates.map((date, i) => (
                <div key={i} tw="m-2 mt-4">
                    <div tw="text-lg font-bold">{date}</div>

                    {groups[date].map((event, j) => (
                        <div key={j} tw="flex px-3 py-1">
                            <div>{event.time}</div>
                            <div tw="ml-2">{event.content}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
