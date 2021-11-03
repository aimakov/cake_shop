import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Intro from "../Components/Intro/";
import CakeBuilder from "../Components/CakeBuilder/index.js";
import CakeDetails from "../Components/Menu/CakeDetails";
import Sides from "../Components/Sides";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Intro />
            <Sides />
            <Footer />
            {/* <CakeBuilder />
            <CakeDetails /> */}
        </>
    );
};

export default Layout;
