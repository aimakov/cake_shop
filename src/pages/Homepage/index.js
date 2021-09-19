import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Intro from "../../Components/Intro";
import Gallery from "../../Components/Gallery";
import CakeBuilder from "../../Components/CakeBuilder";
import Footer from "../../Components/Footer";

import { HomepageContainer, HomepageWrap } from "./HomepageElements";

const Homepage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        console.log("Toggle");
        setIsOpen(!isOpen);
    };

    return (
        <>
            <HomepageContainer>
                <Navbar open={isOpen} setIsOpen={setIsOpen} />

                <Sidebar isOpen={isOpen} />
                <Intro></Intro>
                <CakeBuilder></CakeBuilder>
                <Gallery></Gallery>
                <Footer></Footer>
            </HomepageContainer>
        </>
    );
};

export default Homepage;
