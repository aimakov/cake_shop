import React from "react";

import { NavbarContainer, LogoWrapper, Logo, Title, LinksWrapper, NavLink, AuthWrapper, Language, Eng, Kor, AuthLink } from "./NavbarElements";
import { BurgerMenu } from "../../Components/BurgerMenu";

const Navbar = (props) => {
    return (
        <>
            <NavbarContainer>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <LinksWrapper>
                    <NavLink> Build a Cake </NavLink>
                    <NavLink> Menu </NavLink>
                    <NavLink> Gallery </NavLink>
                    <NavLink> Contact Us</NavLink>
                </LinksWrapper>
                <Title open={props.open}>
                    <span style={{ color: "orange" }}>Cake</span>sie
                </Title>
                <BurgerMenu open={props.open} onClick={() => props.setIsOpen(!props.open)}>
                    <div />
                    <div />
                    <div />
                </BurgerMenu>
                <AuthWrapper>
                    {/* <Language> */}
                    <Eng>🇺🇸</Eng>
                    <Kor>🇰🇷</Kor>
                    {/* </Language> */}
                    <AuthLink to="/">Sign In</AuthLink>
                    <AuthLink to="/">Sign Up</AuthLink>
                </AuthWrapper>
            </NavbarContainer>
        </>
    );
};

export default Navbar;
