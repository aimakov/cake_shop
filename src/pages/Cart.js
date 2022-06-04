import React from "react";

// import Navbar from "../Components/Navbar/Navbar";
import CartOrders from "../Components/Cart/CartOrders";
// import "../Components/Navbar/Navbar.css";
import { useHistory } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
    const history = useHistory();
    return (
        <>
            {/* <Navbar /> */}
            <div id="CartContainer">
                <div id="CartCakesie" onClick={() => history.goBack()}>
                    <span style={{ color: "orange" }}>Cake</span>sie
                </div>
                <CartOrders />
            </div>
        </>
    );
};

export default Cart;
