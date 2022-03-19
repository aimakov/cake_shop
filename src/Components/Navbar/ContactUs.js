import { useContext } from "react";

import "./Navbar.css";
import { FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../App";

const ContactUs = () => {
    const [cart, setCart] = useContext(CartContext);
    const history = useHistory();

    return (
        <div className="NavbarRight">
            <p>Contact Us</p>
            <div id="shoppingCart">
                <FiShoppingCart className="NavLink" onClick={() => history.push("/cart")} />
                <p id="cartAmount">{cart.length}</p>
            </div>
        </div>
    );
};

export default ContactUs;
