import styled from "styled-components";

export const Mainbody = styled.img`
    width: 300px;
    margin: 0 auto;
    z-index: 1;
    /* height: 76px; */

    @media (min-width: 1024px) {
        width: 400px;
        /* height: 100px; */
    }
`;

export const FullLayer = styled.img`
    width: 300px;
    margin: 0 auto;
    /* height: 47px; */
    margin-top: ${({ first }) => (first ? "-45px" : "-28px")};
    z-index: 2;

    /* @media (min-width: 768px) {
        width: 350px;
        margin-top: ${({ first }) => (first ? "-58px" : "-37px")};
    } */

    @media (min-width: 1024px) {
        width: 400px;
        /* height: 64px; */
        margin-top: ${({ first }) => (first ? "-62px" : "-37px")};
        /* background-color: ${({ first }) => (first ? "blue" : "red")}; */
    }
`;
