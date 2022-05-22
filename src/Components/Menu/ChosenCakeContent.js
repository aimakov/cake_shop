import React from "react";
import ChosenCakePrice from "./ChosenCakePrice";
import CakesQuantity from "../CakeBuilder/CakesQuantity";

const ChosenCakeContent = (props) => {
    const addToCart = () => {
        props.addToCart();
        window.alert("Your order has been added!");
    };

    return (
        <div className="ChosenCakeDisplayContent">
            <h4 className="ChosenCakeTitle">{props.chosenCake.title}</h4>
            <p>
                <b>Description: </b> {props.chosenCake.description}
            </p>
            <div className="PriceQuantity" style={{ display: "flex" }}>
                <ChosenCakePrice price={props.chosenCake.price} />
                <CakesQuantity CakeQuantity={props.CakeQuantity} setCakeQuantity={props.setCakeQuantity} className="CakesQuantity" />
            </div>
            <div className="AddToCartContainerMenu">
                <button className="AddToCartMenu" onClick={addToCart}>
                    ADD TO CART
                </button>
            </div>
        </div>
    );
};

export default ChosenCakeContent;
