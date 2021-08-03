import React from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Intro from "../../Components/Intro";
import Gallery from "../../Components/Gallery";
import CakeBuilder from "../../Components/CakeBuilder";
import Footer from "../../Components/Footer";

import { HomepageContainer } from "./HomepageElements";

const Homepage = () => {
    return (
        <>
            <HomepageContainer>
                <Navbar />
                <Sidebar />
                <Intro></Intro>
                <CakeBuilder></CakeBuilder>
                <Gallery></Gallery>
                <Footer></Footer>
            </HomepageContainer>
        </>
    );
};

export default Homepage;
