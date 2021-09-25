import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Intro from "../Components/Intro/";
import CakeBuilder from "../Components/CakeBuilder.js";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <CakeBuilder />
        </>
    );
};

export default Layout;
