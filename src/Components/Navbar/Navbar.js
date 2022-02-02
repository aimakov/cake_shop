// background: #c9d6ff; /* fallback for old browsers */
//     background: -webkit-linear-gradient(to right, #e2e2e2, #c9d6ff); /* Chrome 10-25, Safari 5.1-6 */
//     background: linear-gradient(to right, #e2e2e2, #c9d6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

import React, { useContext, Link } from "react";
import "./Navbar.css";

import { FiShoppingCart, FiUser } from "react-icons/fi";
import { CartContext } from "../../App";

import { useHistory } from "react-router-dom";

const Navbar = () => {
    const [cart, setCart] = useContext(CartContext);
    const history = useHistory();

    return (
        <>
            <div>
                <div className="center" id="title">
                    <div className="col s12 center">
                        <a href="/" id="cakesie" style={{ color: "black", fontSize: "34px" }}>
                            <span className="orange-text">Cake</span>
                            sie
                        </a>
                    </div>
                </div>
                <div className="navbar valign-wrapper transparent center" style={{ width: "90%", margin: "0 auto" }}>
                    <nav style={{ background: "rgba(0,0,0,0)" }} className="z-depth-0">
                        <div className="nav-wrapper">
                            <ul id="nav-mobile" className="right hide-on-med-and-down right-links">
                                <li>
                                    <div onClick={() => history.push("/cart")} id="shoppingCart">
                                        <FiShoppingCart />
                                        <p id="cartAmount">{cart.length}</p>
                                    </div>
                                </li>
                                <li>
                                    <div href="#">
                                        <FiUser />
                                    </div>
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
