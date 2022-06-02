import React, { useState } from "react";
// import { Link } from "react-scroll/modules";
import "./BurgerMenu.css";

import styled from "styled-components";
import { Link, animateScroll } from "react-scroll";

const BurgerMenu = () => {
    const [menuClass, setMenuClass] = useState(false);

    // const burgerLink = styled(Link)`

    // `

    return (
        <>
            <div id="menu">
                <div
                    id="menu-bar"
                    className={menuClass ? "change" : ""}
                    onClick={() => {
                        setMenuClass((prevstate) => !prevstate);
                    }}
                >
                    <div className="bar" id="bar1"></div>
                    <div className="bar" id="bar2"></div>
                    <div className="bar" id="bar3"></div>
                </div>
                <nav className={menuClass ? "nav change" : "nav"}>
                    <ul>
                        <li>
                            <Link smooth={true} duration={750} spy={true} exact="true" onClick={animateScroll.scrollToTop}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={750} spy={true} exact="true">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="sides" smooth={true} duration={750} spy={true} exact="true">
                                Shopping
                            </Link>
                        </li>
                        <li>
                            <Link to="staff" smooth={true} duration={750} spy={true} exact="true">
                                Our Team
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={750} spy={true} exact="true">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={menuClass ? "menu-bg change-bg" : "menu-bg"} id="menu-bg"></div>
        </>
    );
};

export default BurgerMenu;
