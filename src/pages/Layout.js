import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Intro from "../Components/Intro/";
import CakeBuilder from "../Components/CakeBuilder/index.js";
import CakeDetails from "../Components/Menu/CakeDetails";
import Sides from "../Components/Sides";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu/Menu";

import "./Layout.css";

const Layout = () => {
    const [active, setActive] = useState("sides");

    return (
        <>
            <div className="Intro">
                <Navbar />
                <Intro />
            </div>

            <div style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
                <CakeBuilder active={active} setActive={setActive} />
                <Sides active={active} setActive={setActive} />
                <Menu active={active} setActive={setActive} />
            </div>
        </>
    );
};

export default Layout;
