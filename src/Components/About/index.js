import React from "react";
import first from "../../images/About/first.jpeg";
import second from "../../images/About/second.jpeg";
import third from "../../images/About/third.jpeg";
import fourth from "../../images/About/fourth.jpeg";
import fifth from "../../images/About/fifth.jpeg";

import "./About.css";

const index = () => {
    return (
        <div className="AboutContainer" id="about">
            <h3>Best cakes since 2018</h3>
            <p>All of our cakes are handmade with love - no matter if you build your own or chose from the set of our pre-made ones!</p>
            <div className="CakeStores">
                <div className="leftCakeStore">
                    <img src={first} alt="" />
                </div>
                <div className="rightCakeStores">
                    <img src={second} alt="" />
                    <img src={third} alt="" />
                    <img src={fourth} alt="" />
                    <img src={fifth} alt="" />
                </div>
            </div>
        </div>
    );
};

export default index;
