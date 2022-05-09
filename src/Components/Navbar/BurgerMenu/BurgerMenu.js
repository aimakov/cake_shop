import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import "./BurgerMenu.css";

const BurgerMenu = () => {
    const [menuClass, setMenuClass] = useState(false);

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
                            <Link>Home</Link>
                        </li>
                        <li>
                            <Link>About</Link>
                        </li>
                        <li>
                            <Link>Shopping</Link>
                        </li>
                        <li>
                            <Link>Our Team</Link>
                        </li>
                        <li>
                            <Link>Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={menuClass ? "menu-bg change-bg" : "menu-bg"} id="menu-bg"></div>
        </>
    );
};

export default BurgerMenu;
