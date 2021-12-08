import React, { useState } from "react";
import "./Menu.css";

const MenuElement = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* <div className="col s8 offset-s2 m6 l3 CardContainer"> */}
            <div className="col s2 CardContainer">
                <div className="CardElement">
                    <img
                        src={props.cake.image}
                        className="responsive-img"
                        // onClick={() => setIsOpen(true)}
                        onClick={() => props.setChosenCake(props.cake_id)}
                        style={{ borderRadius: "30px 30px 0 0 ", width: "100%", display: "block" }}
                    />

                    <div className="CakePrice">{props.cake.price}</div>

                    {/* <div
                        className={isOpen ? "Description Description-active" : "Description"}
                        // onClick={() => {
                        //     props.setChosenCake(props.cake_id);
                        //     setIsOpen(false);
                        // }}
                    >
                        <p>{props.cake.description}</p>
                    </div> */}
                </div>
                <div className="CardTitle">
                    <p>{props.cake.title}</p>
                </div>
            </div>
        </>
    );
};

export default MenuElement;
