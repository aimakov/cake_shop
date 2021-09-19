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
    border-radius: 50px;
    border: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #2ee59d;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
    }
`;

export const IntroCakeWrap = styled.div`
    padding: 20px;
    width: 30vw;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const IntroCake = styled.img`
    width: 100%;
    max-width: 500px;
`;
