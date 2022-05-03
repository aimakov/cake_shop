import React from "react";
import first from "../../images/About/first.jpeg";
import second from "../../images/About/second.jpeg";
import third from "../../images/About/third.jpeg";
import fourth from "../../images/About/fourth.jpeg";
import fifth from "../../images/About/fifth.jpeg";

import "./About.css";

const index = () => {
    return (
        <div className="AboutContainer">
            <h3>Best cakes since 2018</h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias eaque fugiat recusandae suscipit, ipsam ullam, voluptatum odio itaque quo
                perferendis cupiditate modi alias tempore harum.
            </p>
            <div className="CakeStores">
                <div className="leftCakeStore">
                    <img src={first} />
                </div>
                <div className="rightCakeStores">
                    <img src={second} />
                    <img src={third} />
                    <img src={fourth} />
                    <img src={fifth} />
                </div>
            </div>
        </div>
    );
};

export default index;
