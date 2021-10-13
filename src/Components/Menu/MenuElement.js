import React, { useState } from "react";
import "./Menu.css";

const MenuElement = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="col s8 offset-s2 m6 l4 CardElement ">
            <img
                src={props.cake.image}
                className="responsive-img"
                onClick={() => setIsOpen((prevstate) => !prevstate)}
                style={{ borderRadius: "30px 30px 0 0 ", width: "100%" }}
            />
            <div className="CardTitle">
                <p>{props.cake.title}</p>
            </div>
            <div className="CakePrice">{props.cake.price}</div>

            <div className={isOpen ? "Description Description-active" : "Description"}>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>
    );
};

export default MenuElement;
