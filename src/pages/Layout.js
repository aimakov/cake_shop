import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Intro from "../Components/Intro/";
import CakeBuilder from "../Components/CakeBuilder/index.js";
import CakeDetails from "../Components/Menu/CakeDetails";
import Sides from "../Components/Sides";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu/Menu";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <div style={{ position: "relative" }}>
                <Sides />
                <Menu />
            </div>

            {/* <Footer /> */}
            {/* <CakeBuilder />
            <CakeDetails /> */}
        </>
    );
};

export default Layout;
