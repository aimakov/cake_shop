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

const CartOrders = () => {
    const history = useHistory();
    const [cart, setCart] = useContext(CartContext);

    useEffect(() => {
        console.log(cart);
    }, []);

    const handleDelete = (id) => {
        setCart(cart.filter((el) => el.cake !== id));
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
                    {React.Children.toArray(
                        cart.map((el) => {
                            if (el.type === "selected") {
                                return (
                                    <div className="cartElementWrapper">
                                        <div className="cartElement">
                                            <img src={Cakes[el.cake].image} />
                                            <div className="cartElementInfo">
                                                <h6>{Cakes[el.cake].title}</h6>
                                                {String(Number(Cakes[el.cake].price.slice(-5)) - 5).slice(0, 5)}$
                                            </div>
                                        </div>
                                        <div className="cartElementIcons" onClick={() => handleDelete(el.cake)}>
                                            <FiX />
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div className="cartElementWrapper">
                                        <div className="cartElement">
                                            <div className="smallCakeWrapper">
                                                <RenderedCake
                                                    IcingSrc={handleIcing(el.icingType)}
                                                    LayerSrc={handleLayer(el.layerType)}
                                                    CreamSrc={handleCream(el.creamType)}
                                                    NumLayers={el.numberOfLayers}
                                                    small={true}
                                                />
                                            </div>
                                        </div>
                                        <div className="cartElementIcons" onClick={() => handleDelete(el.cake)}>
                                            <FiX />
                                        </div>
                                    </div>
                                );
                            }
                        })
                    )}
                </div>
                <form>
                    <div className="formEntry">
                        <label htmlFor="">Enter your email:</label>
                        <input placeholder="email" type="email" />
                    </div>
                    <div className="formEntry">
                        <label>Choose Delivery Date:</label>
                        <input type="date" id="DeliveryDate" />
                    </div>
                </form>
                <button>Checkout</button>
                <button onClick={() => console.log(history.goBack())}>Go Back</button>
            </div>
        </div>
    );
};

export default CartOrders;
