import styled, {keyframes} from "styled-components";
const pulse = keyframes`
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: -135% 0%;
    }
`;
const Skeleton = styled.div`
    border-radius: 5px;
    display: inline-block;
    background: linear-gradient(
    -90deg,
    lightgrey 0%,
    #f0f0f0 50%,
    lightgrey 100%
    );
    background-size: 400% 400%;
    animation: 1.8s ${pulse} ease-in infinite;
    width: 100%;
    min-height: 20px;
`;
export default Skeleton;