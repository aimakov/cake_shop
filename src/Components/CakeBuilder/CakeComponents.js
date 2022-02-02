import styled from "styled-components";

export const Layer = styled.img`
    width: ${({ small }) => (small ? "75px" : "300px")};
    margin: 0 auto;
    height: ${({ small }) => (small ? "12px" : "47px")};
    margin-top: ${({ first, small }) => (first ? (small ? "-11px" : "-45px") : small ? "-7px" : "-28px")};
    z-index: 2;

    /* @media (min-width: 768px) {
        width: 350px;
        margin-top: ${({ first }) => (first ? "-58px" : "-37px")};
    } */

    @media (min-width: 1300px) {
        width: ${({ small }) => (small ? "100px" : "400px")};
        height: ${({ small }) => (small ? "16px" : "64px")};
        margin-top: ${({ first, small }) => (first ? (small ? "-16px" : "-62px") : small ? "-9px" : "-37px")};
        /* background-color: ${({ first }) => (first ? "blue" : "red")}; */
    }
`;

export const Cream = styled.img`
    width: ${({ small }) => (small ? "75px" : "300px")};
    margin: 0 auto;
    margin-top: ${({ small }) => (small ? "-7px" : "-28px")};
    padding-left: ${({ small }) => (small ? "0px" : "2px")};
    z-index: 1;
    height: ${({ small }) => (small ? "11px" : "44px")};

    /* @media (min-width: 768px) {
        width: 350px;
        margin-top: -37px;
    } */

    @media (min-width: 1300px) {
        width: ${({ small }) => (small ? "100px" : "400px")};
        height: ${({ small }) => (small ? "15px" : "58px")};
        margin-top: ${({ small }) => (small ? "-10px" : "-38px")};
    }
`;

export const Icing = styled.img`
    width: ${({ small }) => (small ? "76px" : "305px")};
    margin: 0 auto;
    z-index: 3;
    height: ${({ small }) => (small ? "19px" : "76px")};

    /* @media (min-width: 768px) {
        width: 355px;
    } */

    @media (min-width: 1300px) {
        width: ${({ small }) => (small ? "100px" : "405px")};
        height: ${({ small }) => (small ? "25px" : "100px")};
    }
`;
