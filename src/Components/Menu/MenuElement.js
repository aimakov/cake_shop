import React from "react";
import "./Menu.css";

const MenuElement = (props) => {
    return (
        <>
            {/* <div className="col s8 offset-s2 m6 l3 CardContainer"> */}
            <div className="CardContainer">
                <div className="CardElement">
                    <img
                        src={props.cake.image}
                        className="cakeImg"
                        // onClick={() => setIsOpen(true)}
                        onClick={() => props.setChosenCake(props.cake_id)}
                        alt=""
                    />

                    <div className="CakePrice">{props.cake.price}</div>
                </div>
                <div className="CardTitle">
                    <p>{props.cake.title}</p>
                </div>
            </div>
        </>
    );
};

export default MenuElement;
