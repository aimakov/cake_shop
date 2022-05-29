import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./CartOrders.css";
import { CartContext } from "../../App";
import Cakes from "../Menu/Cakes";
import { FiX } from "react-icons/fi";
import RenderedCake from "../CakeBuilder/RenderedCake";

import VanillaLayer from "../../images/CakeComponents/VanillaLayer3.png";
import ChocoLayer from "../../images/CakeComponents/ChocoLayer3.png";
import LemonLayer from "../../images/CakeComponents/LemonLayer3.png";
import StrawberryLayer from "../../images/CakeComponents/StrawberryLayer3.png";

import VanillaCream from "../../images/CakeComponents/VanillaCream.png";
import ChocoCream from "../../images/CakeComponents/ChocoCream.png";
import LemonCream from "../../images/CakeComponents/LemonCream.png";
import StrawberryCream from "../../images/CakeComponents/StrawberryCream.png";

import VanillaIcing from "../../images/CakeComponents/VanillaIcing.png";
import ChocoIcing from "../../images/CakeComponents/ChocoIcing.png";
import LemonIcing from "../../images/CakeComponents/LemonIcing.png";
import StrawberryIcing from "../../images/CakeComponents/StrawberryIcing.png";
import { useState } from "react/cjs/react.development";

const CartOrders = () => {
    const history = useHistory();
    const [cart, setCart] = useContext(CartContext);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(
            parseFloat(
                cart
                    .filter((el) => el.type === "selected")
                    .reduce((totalAmount, element) => totalAmount + (Number(Cakes[element.cake].price.slice(1, 6)) - 5) * element.amount, 0) +
                    cart
                        .filter((el) => el.type === "created")
                        .reduce((totalAmount, element) => totalAmount + Number(element.numberOfLayers) * 12.95 * element.amount, 0)
            ).toFixed(2)
        );
    }, [cart]);

    const handleDelete = (uid) => {
        setCart(cart.filter((el) => el.uid !== uid));
    };

    const handleDeleteCustomCake = (id) => {
        setCart(cart.filter((el) => el.cake !== id));
    };

    const handleIcing = (icingType) => {
        if (icingType === "Vanilla") return VanillaIcing;
        if (icingType === "Chocolate") return ChocoIcing;
        if (icingType === "Strawberry") return StrawberryIcing;
        if (icingType === "Lemon") return LemonIcing;
    };

    const handleLayer = (layerType) => {
        if (layerType === "Vanilla") return VanillaLayer;
        if (layerType === "Chocolate") return ChocoLayer;
        if (layerType === "Strawberry") return StrawberryLayer;
        if (layerType === "Lemon") return LemonLayer;
    };

    const handleCream = (creamType) => {
        if (creamType === "Vanilla") return VanillaCream;
        if (creamType === "Chocolate") return ChocoCream;
        if (creamType === "Strawberry") return StrawberryCream;
        if (creamType === "Lemon") return LemonCream;
    };

    return (
        <div className="cartContainer">
            <div className="cartWrapper">
                <div className="cartElementsList">
                    {cart.length === 0 ? <p id="emptyCart">Cart is empty</p> : null}
                    {React.Children.toArray(
                        cart.map((el) => {
                            return (
                                <div className="cartElementWrapper">
                                    <div className="cartElement">
                                        {el.type === "selected" ? (
                                            <>
                                                <img src={Cakes[el.cake].image} />
                                                <div className="cartElementInfo selectedInfo">
                                                    <p>
                                                        {Cakes[el.cake].title} {el.amount > 1 ? `x${el.amount}` : null}
                                                    </p>
                                                    <p className="cartPrice">
                                                        ${parseFloat(String((Number(Cakes[el.cake].price.slice(-5)) - 5) * el.amount).slice(0, 5)).toFixed(2)}
                                                    </p>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="smallCakeWrapper">
                                                <RenderedCake
                                                    IcingSrc={handleIcing(el.icingType)}
                                                    LayerSrc={handleLayer(el.layerType)}
                                                    CreamSrc={handleCream(el.creamType)}
                                                    NumLayers={el.numberOfLayers}
                                                    small={true}
                                                />
                                                <div className="cartElementInfo">
                                                    <p>Custom Cake {el.amount > 1 ? `x${el.amount}` : null}</p>
                                                    <div className="customCakeInfo">
                                                        <p>Layers: </p> <p>{el.layerType}</p>
                                                        <p>Cream: </p> <p>{el.creamType}</p>
                                                        <p>Icing: </p> <p>{el.icingType}</p>
                                                        <p>Layers: </p> <p>{el.numberOfLayers}</p>
                                                    </div>
                                                    <p className="cartPrice">${parseFloat(String(Number(el.numberOfLayers) * 12.95) * el.amount).toFixed(2)}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="cartElementIcons" onClick={() => handleDelete(el.uid)}>
                                        <FiX />
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
                <p id="totalPrice">Total Price: ${totalPrice}</p>
                <form>
                    <div className="formEntry">
                        <label htmlFor="">Enter your email:</label>
                        <input placeholder="email" type="email" />
                    </div>
                    <div className="formEntry">
                        <label>Choose Pick-Up Date:</label>
                        <input type="date" id="DeliveryDateInput" />
                    </div>
                </form>
                <div className="cartButtons">
                    <button className="waves-effect waves-light btn-small lighten-5 black-text" onClick={() => history.goBack()}>
                        Go Back
                    </button>
                    <button className="waves-effect waves-light btn-small orange lighten-1 black-text">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartOrders;
