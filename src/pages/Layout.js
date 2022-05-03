import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Intro from "../Components/Intro/";
import CakeBuilder from "../Components/CakeBuilder/index.js";
import Sides from "../Components/Sides";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu/Menu";
import Contact from "../Components/Contact";
import About from "../Components/About";
import Staff from "../Components/Staff";

import "./Layout.css";

const Layout = () => {
    const [active, setActive] = useState("sides");

    return (
        <>
            <div className="Intro">
                <Navbar />
                <Intro />
            </div>
            <About />
            <Staff />
            <div style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
                <CakeBuilder active={active} setActive={setActive} />
                <Sides active={active} setActive={setActive} />
                <Menu active={active} setActive={setActive} />
            </div>
            <Contact />
        </>
    );
};

export default Layout;
