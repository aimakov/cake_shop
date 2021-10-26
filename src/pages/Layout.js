import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Intro from "../Components/Intro/";
import CakeBuilder from "../Components/CakeBuilder/index.js";
import CakeDetails from "../Components/Menu/CakeDetails";
import Sides from "../Components/Sides";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <Sides />
            {/* <CakeBuilder />
            <CakeDetails /> */}
        </>
    );
};

export default Layout;
