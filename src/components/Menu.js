import React from 'react';
import tw, {styled} from 'twin.macro';
import {Link, useLocation} from "react-router-dom";

const Container = tw.div`w-full bg-pendle-green flex flex-row whitespace-no-wrap overflow-x-auto flex-shrink-0`;

export default () => {
  return (
    <Container>
        <MenuItem link="/">Welcome Week</MenuItem>
        <MenuItem link="/sports">Sports</MenuItem>
        <MenuItem link="/blog">The Witch</MenuItem>
        <MenuItem link="/jcr">JCR</MenuItem>
    </Container>
  );
}

const Frame = styled.div`
  ${tw`p-2 text-center font-effra text-white text-lg px-5 hover:bg-pendle-yellow hover:text-white font-medium text-xl`}
  ${({active}) => active && tw`bg-pendle-yellow text-white`}
`

const MenuItem = ({children, link}) => {
  let location = useLocation();

  return (
    <Link to={link}>
      <Frame active={location.pathname === link}>{children}</Frame>
    </Link>
  );
}
