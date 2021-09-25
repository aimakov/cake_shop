// background: #c9d6ff; /* fallback for old browsers */
//     background: -webkit-linear-gradient(to right, #e2e2e2, #c9d6ff); /* Chrome 10-25, Safari 5.1-6 */
//     background: linear-gradient(to right, #e2e2e2, #c9d6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <div style={{ position: "absolute", top: "0", width: "100%" }}>
                <div className="center" id="title">
                    <div className="col s12 center">
                        <p id="cakesie">
                            <span className="orange-text">Cake</span>
                            sie
                        </p>
                    </div>
                </div>
                <div className="navbar valign-wrapper transparent">
                    <nav style={{ background: "rgba(0,0,0,0)" }} className="z-depth-0">
                        <div className="nav-wrapper">
                            <ul id="nav-mobile" className="left hide-on-med-and-down left-links ">
                                <li>
                                    <a href="sass.html">Build a Cake</a>
                                </li>
                                <li>
                                    <a href="badges.html">Menu</a>
                                </li>
                                <li>
                                    <a href="collapsible.html">Gallery</a>
                                </li>
                                <li>
                                    <a href="collapsible.html">Contact Us</a>
                                </li>
                            </ul>

                            <ul id="nav-mobile" className="right hide-on-med-and-down right-links">
                                <li>
                                    <a href="sass.html">Login</a>
                                </li>
                                <li>
                                    <a href="badges.html">Register</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
