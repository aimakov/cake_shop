import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const NavbarContainer = styled.div`
    position: sticky;
    /* background-color: #ff8474; */
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: flex-start;
    /* border-bottom: 1px black solid; */
    position: absolute;
    top: 0;
    width: 100%;
`;

export const LogoWrapper = styled.div``;

export const Logo = styled.div``;

export const TitleWrapper = styled.div``;

export const Title = styled.p`
    font-size: 36px;
    margin-left: 40px;
    font-weight: 700;
    padding-right: 10px;
    border-right: 2px solid black;
`;

export const LinksWrapper = styled.div`
    margin-left: 20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

export const NavLink = styled(LinkS)`
    margin-right: 20px;
`;

export const AuthWrapper = styled.div`
    margin-left: auto;
    margin-right: 20px;
    display: flex;
`;

export const Language = styled.div`
    display: flex;
`;

export const Eng = styled.div`
    width: 30px;
    cursor: pointer;
    margin-right: 10px;
    font-size: 30px;
`;

export const Kor = styled.div`
    width: 30px;
    cursor: pointer;
    margin-right: 10px;
    font-size: 30px;
`;

export const AuthLink = styled(LinkR)`
    padding: 5px;
    text-decoration: none;
    color: black;
    line-height: 29px;
`;
