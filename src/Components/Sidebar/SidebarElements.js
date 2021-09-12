import styled from "styled-components";

import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    transform: ${({ isOpen }) => (isOpen ? null : "translateX(100%)")};
    height: 100vh;
    width: 60%;
    max-width: 300px;
    background-color: red;
    transition: all 0.2s ease-in-out;
`;

export const SidebarWrapper = styled.div``;

export const SidebarLink = styled(LinkS)``;

export const AuthLink = styled(LinkR)``;
