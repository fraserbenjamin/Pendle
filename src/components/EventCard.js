import React from 'react';
import tw from 'twin.macro';
import {Link} from "react-router-dom";

import Tag from "./ui/Tag";

const Container = tw.div`w-full bg-white p-3 font-effra h-full shadow-md flex flex-col`;
const Title = tw.div`font-semibold`;
const Body = tw.p`my-2 flex-grow`;
const Tags = tw.p`w-full overflow-x-auto`;

export default ({data}) => {
    return (
        <Link to={`/event/${data.path}`}>
            <Container>
                <Title>{data.title}</Title>
                <Body>{data.description}</Body>

                <Tags>
                    {data.tags?.map((tag,i) => (
                        <Tag key={i}>{tag}</Tag>
                    ))}
                </Tags>
            </Container>
        </Link>
  );
}
