import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Intro from "../Components/Intro/";
import CakeBuilder from "../Components/CakeBuilder/index.js";
import CakeDetails from "../Components/Menu/CakeDetails";
import Sides from "../Components/Sides";
import Footer from "../Components/Footer";
import Menu from "../Components/Menu/Menu";

const Layout = () => {
    const [active, setActive] = useState("sides");

    return (
        <>
            <Navbar />
            <Intro />
            <div style={{ position: "relative" }}>
                <CakeBuilder active={active} setActive={setActive} />
                <Sides active={active} setActive={setActive} />
                <Menu active={active} setActive={setActive} />
            </div>

            {/* <Footer /> */}
            {/* <CakeBuilder />
            <CakeDetails /> */}
        </>
    );
};

export default Layout;
