import React, { useState } from "react";

import Cake_12 from "../../../images/CakeGallery/Cake_12.jpeg";
import "./CakeDetails.css";

import { FiStar, FiMinus, FiPlus } from "react-icons/fi";

const CakeDetails = () => {
    const [numCakes, setNumCakes] = useState(1);

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
                    <div className="QuantityCart">
                        <div className="Arrows">
                            <span style={{ lineHeight: "2.5rem", marginRight: "10px", paddingTop: "2px" }}>QUANTITY: </span>
                            <div className="CakesQuantity">
                                <FiMinus
                                    style={{ fontSize: "26px", margin: "6px 8px 0 0 ", cursor: "pointer" }}
                                    onClick={() => (numCakes > 1 ? setNumCakes((prevstate) => prevstate - 1) : null)}
                                />
                                <div
                                    style={{
                                        backgroundColor: "white",
                                        width: "2.5rem",
                                        height: "2.5rem",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <span style={{ fontSize: "20px", paddingTop: "3px" }}>{numCakes}</span>
                                </div>

                                <FiPlus
                                    style={{ fontSize: "26px", margin: "6px 0 0 8px", cursor: "pointer" }}
                                    onClick={() => setNumCakes((prevstate) => prevstate + 1)}
                                />
                            </div>
                            <button className="AddToCart waves-effect waves-light btn-medium orange lighten-1 black-text">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CakeDetails;
