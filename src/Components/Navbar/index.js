import React from "react";

import { NavbarContainer, LogoWrapper, Logo, Title, LinksWrapper, NavLink, AuthWrapper, AuthLink } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <LinksWrapper>
                    <NavLink> Build a Cake </NavLink>
                    <NavLink> Discover </NavLink>
                    <NavLink> Contact Us</NavLink>
                </LinksWrapper>
                <Title>Nottingham Homemade Cakes</Title>
                <AuthWrapper>
                    <AuthLink to="/">Sign In</AuthLink>
                    <AuthLink to="/">Sign Up</AuthLink>
                </AuthWrapper>
            </NavbarContainer>
        </>
    );
};

export default Navbar;
