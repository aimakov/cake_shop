import React from "react";

import Cake_12 from "../../../images/CakeGallery/Cake_12.jpeg";
import "./CakeDetails.css";

import { FiStar } from "react-icons/fi";

const CakeDetails = () => {
    return (
        <>
            <div className="CakeDetailsContainer container">
                <div className="LeftSide">
                    <div className="ZoomedImage">
                        <img src={Cake_12} />
                    </div>
                    <div className="CakeDescription"></div>
                    <div className="Details"></div>
                    <div className="Shipping"></div>
                </div>
                <div className="RightSide">
                    <div className="TitlePrice">
                        <h5>CAKE TITLE</h5>
                        <div className="Rating">
                            {[...Array(5)].map((x, i) => (
                                <FiStar id={`${i}th_star`} />
                            ))}
                            <span>(23) Rate this product!</span>
                        </div>
                        <p>CAKE PRICE</p>
                    </div>
                    <div className="DeliveryDate">
                        <h5>Choose your delivery date</h5>
                        <input type="date" style={{ width: "150px" }} />
                        <p>Due to high shipping volume, please schedule your gift to arrive before the birthday when possible</p>
                    </div>
                    <div className="Upgrade"></div>
                    <div className="QuantityCart"></div>
                </div>
            </div>
        </>
    );
};

export default CakeDetails;
