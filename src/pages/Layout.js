import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Intro from "../Components/Intro/";
import CakeBuilder from "../Components/CakeBuilder.js";
import Menu from "../Components/Menu";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <CakeBuilder />
            <Menu />
        </>
    );
};

export default Layout;
