import styled from "styled-components";

export const Layer = styled.img`
    width: 300px;
    margin: 0 auto;
    margin-top: ${({ first }) => (first ? "-45px" : "-27px")};
    z-index: 2;

    @media (min-width: 768px) {
        width: 400px;
        margin-top: ${({ first }) => (first ? "-58px" : "-37px")};
        /* background-color: ${({ first }) => (first ? "blue" : "red")}; */
    }

    @media (min-width: 1024px) {
        width: 500px;
        margin-top: ${({ first }) => (first ? "-73px" : "-46px")};
        /* background-color: ${({ first }) => (first ? "blue" : "red")}; */
    }
`;

export const Cream = styled.img`
    width: 300px;
    margin: 0 auto;
    margin-top: -27px;
    padding-left: 2px;
    z-index: 1;

    @media (min-width: 768px) {
        width: 400px;
        margin-top: -37px;
    }

    @media (min-width: 1024px) {
        width: 500px;
        margin-top: -47px;
    }
`;

export const Icing = styled.img`
    width: 305px;
    margin: 0 auto;
    z-index: 3;

    @media (min-width: 768px) {
        width: 405px;
    }

    @media (min-width: 1024px) {
        width: 505px;
    }
`;
