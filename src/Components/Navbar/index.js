import React from "react";

import { NavbarContainer, LogoWrapper, Logo, Title, LinksWrapper, NavLink, AuthWrapper, Language, Eng, Kor, AuthLink } from "./NavbarElements";

const Navbar = () => {
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
                <Title>
                    <span style={{ color: "orange" }}>Cake</span>sie
                </Title>
                <AuthWrapper>
                    <Language>
                        <Eng>🇺🇸</Eng>
                        <Kor>🇰🇷</Kor>
                    </Language>
                    <AuthLink to="/">Sign In</AuthLink>
                    <AuthLink to="/">Sign Up</AuthLink>
                </AuthWrapper>
            </NavbarContainer>
        </>
    );
};

export default Navbar;
