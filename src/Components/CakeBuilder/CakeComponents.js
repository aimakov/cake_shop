import styled from "styled-components";

export const Layer = styled.img`
    width: 300px;
    margin: 0 auto;
    height: 47px;
    margin-top: ${({ first }) => (first ? "-45px" : "-28px")};
    z-index: 2;

    /* @media (min-width: 768px) {
        width: 350px;
        margin-top: ${({ first }) => (first ? "-58px" : "-37px")};
    } */

    @media (min-width: 1300px) {
        width: 400px;
        height: 64px;
        margin-top: ${({ first }) => (first ? "-62px" : "-37px")};
        /* background-color: ${({ first }) => (first ? "blue" : "red")}; */
    }
`;

export const Cream = styled.img`
    width: 300px;
    margin: 0 auto;
    margin-top: -28px;
    padding-left: 2px;
    z-index: 1;
    height: 44px;

    /* @media (min-width: 768px) {
        width: 350px;
        margin-top: -37px;
    } */

    @media (min-width: 1300px) {
        width: 400px;
        height: 58px;
        margin-top: -38px;
    }
`;

export const Icing = styled.img`
    width: 305px;
    margin: 0 auto;
    z-index: 3;
    height: 76px;

    /* @media (min-width: 768px) {
        width: 355px;
    } */

    @media (min-width: 1300px) {
        width: 405px;
        height: 100px;
    }
`;
