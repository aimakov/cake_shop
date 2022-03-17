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
            <div className="Navbar">
                <h4 id="cakesie">
                    <span className="orange-text">Cake</span>
                    sie
                </h4>
                <div className="Links">
                    <p>Home</p>
                    <p>About</p>
                    <p>Staff</p>
                    <p>Shop</p>
                    <p>Contact</p>
                </div>

                <div className="NavbarRight">
                    <p>Contact Us</p>
                    <div id="shoppingCart">
                        <FiShoppingCart className="NavLink" onClick={() => history.push("/cart")} />
                        <p id="cartAmount">{cart.length}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
