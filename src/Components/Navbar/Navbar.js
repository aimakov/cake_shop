// background: #c9d6ff; /* fallback for old browsers */
//     background: -webkit-linear-gradient(to right, #e2e2e2, #c9d6ff); /* Chrome 10-25, Safari 5.1-6 */
//     background: linear-gradient(to right, #e2e2e2, #c9d6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

import React from "react";
import "./Navbar.css";

import Title from "./Title";
import Links from "./Links";
import ContactUs from "./ContactUs";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Navbar = () => {
    return (
        <>
            <div className="Navbar">
                <Title />
                <Links />
                <ContactUs />
                <BurgerMenu />
            </div>
        </>
    );
};

export default Navbar;
