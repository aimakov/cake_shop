import styled from "styled-components";

import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    transform: ${({ isOpen }) => (isOpen ? null : "translateY(-100%)")};
    height: 100vh;
    width: 100%;
    /* max-width: 300px; */
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    transition: all 0.2s linear;
`;

export const SidebarWrapper = styled.div`
    margin: auto;
    background-color: red;
    width: 80%;
    height: 80%;
`;

export const SidebarLink = styled(LinkS)``;

export const AuthLink = styled(LinkR)``;
