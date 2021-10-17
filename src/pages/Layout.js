import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Intro from "../Components/Intro/";
import CakeBuilder from "../Components/CakeBuilder/index.js";
import CakeDetails from "../Components/Menu/CakeDetails";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <CakeBuilder />
            <CakeDetails />
        </>
    );
};

export default Layout;
