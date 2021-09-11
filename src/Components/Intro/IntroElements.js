import styled from "styled-components";

export const IntroContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 130px);
    /* height: calc(100vh-80px); */
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: space-evenly;
`;

export const IntroTitleWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const IntroTitle = styled.p`
    font-size: 46px;
    text-align: center;
    /* margin-top: -150px; */
    /* text-align: center; */

    @media screen and (max-width: 1095px) {
        font-size: 36px;
    }
`;

export const IntroP = styled.p`
    padding: 10px 5px;
`;

export const IntroButton = styled.button`
    width: 150px;
    height: 50px;
    margin: 20px auto;
    cursor: pointer;
    font-size: 15px;
    border-radius: 10px;
`;

export const IntroCakeWrap = styled.div`
    padding: 20px;
    width: 30vw;
    /* background-color: red; */
    @media screen and (max-width: 1095px) {
        display: none;
    }
`;

export const IntroCake = styled.img`
    width: 100%;
    max-width: 500px;
`;
