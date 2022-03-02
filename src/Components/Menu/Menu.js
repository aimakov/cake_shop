import React, { useState, useEffect, useContext } from "react";
import "./Menu.css";
import MenuElement from "./MenuElement";

import Cakes from "./Cakes";

import CakeDetails from "./CakeDetails/";

import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { FiStar, FiMinus, FiPlus, FiChevronLeft } from "react-icons/fi";

import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import { CartContext } from "../../App";

const Menu = (props) => {
    // https://sendacake.com/fresh-baked-cakes?__cf_chl_captcha_tk__=pmd_gYJr2iLHCtkiK3jo3FX5C3geeMwMFevotYt4Vr_Gc0g-1633787267-0-gqNtZGzNAyWjcnBszQ1R

    const [chosenCake, setChosenCake] = useState(0);
    const [currentCake, setCurrentCake] = useState(2);
    const [chosenCakeQuantity, setChosenCakeQuantity] = useState(1);

    const [left, setLeft] = useState("100vw");
    const { height, width } = useWindowDimensions();

    const [cart, setCart] = useContext(CartContext);

    useEffect(() => {
        setChosenCakeQuantity(1);
    }, [chosenCake]);

    useEffect(() => {
        if (props.active === "create") {
            setLeft("200vw");
        } else if (props.active === "sides") {
            setLeft("100vw");
        } else if (props.active === "select") {
            setLeft("0");
        }
    }, [props.active]);

    const addToCart = () => {
        const order = {
            type: "selected",
            cake: chosenCake,
            uid: generateUID(),
            amount: chosenCakeQuantity,
        };

        setCart((prevstate) => [...prevstate, order]);
    };

    const generateUID = () => {
        while (true) {
            let uid = Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);

            if (cart.filter((element) => element.id === uid).length === 0) return uid;
        }
    };

    return (
        <>
            <div className="SelectContainer" style={{ left: left }}>
                <FiChevronLeft
                    onClick={() => props.setActive("sides")}
                    style={{ position: "absolute", top: "50%", left: "1%", fontSize: "3rem", cursor: "pointer" }}
                />
                <div className="Menu">
                    {width > 1024 ? (
                        <>
                            <div className="CakesDisplay">
                                <button
                                    className="changeCakeButton"
                                    onClick={() => setCurrentCake((prevstate) => (prevstate - 1 + Cakes.length) % Cakes.length)}
                                >
                                    <VscChevronLeft />
                                </button>
                                <div className="CakesDisplayImages">
                                    <MenuElement
                                        cake={Cakes[(currentCake - 2 + Cakes.length) % Cakes.length]}
                                        cake_id={(currentCake - 2 + Cakes.length) % Cakes.length}
                                        setChosenCake={setChosenCake}
                                    />
                                    <MenuElement
                                        cake={Cakes[(currentCake - 1 + Cakes.length) % Cakes.length]}
                                        cake_id={(currentCake - 1 + Cakes.length) % Cakes.length}
                                        setChosenCake={setChosenCake}
                                    />{" "}
                                    <MenuElement cake={Cakes[currentCake]} cake_id={currentCake} setChosenCake={setChosenCake} />{" "}
                                    <MenuElement
                                        cake={Cakes[(currentCake + 1) % Cakes.length]}
                                        cake_id={(currentCake + 1) % Cakes.length}
                                        setChosenCake={setChosenCake}
                                    />
                                    <MenuElement
                                        cake={Cakes[(currentCake + 2) % Cakes.length]}
                                        cake_id={(currentCake + 2) % Cakes.length}
                                        setChosenCake={setChosenCake}
                                    />
                                </div>
                                <button className="changeCakeButton" onClick={() => setCurrentCake((prevstate) => (prevstate + 1) % Cakes.length)}>
                                    <VscChevronRight />
                                </button>
                            </div>
                        </>
                    ) : null}
                    <div className="ChosenCakeDisplay">
                        <div className="singleMenuCake">
                            {width <= 1024 ? (
                                <button
                                    className="changeCakeButton"
                                    onClick={() => setChosenCake((prevstate) => (prevstate - 1 + Cakes.length) % Cakes.length)}
                                >
                                    <VscChevronLeft />
                                </button>
                            ) : null}

                            <div className="ChosenCakeDisplayImage">
                                <img src={Cakes[chosenCake].image} />
                            </div>
                            {width <= 1024 ? (
                                <button className="changeCakeButton" onClick={() => setChosenCake((prevstate) => (prevstate + 1) % Cakes.length)}>
                                    <VscChevronRight />
                                </button>
                            ) : null}
                        </div>

                        <div className="ChosenCakeDisplayContent">
                            <h4 className="ChosenCakeTitle">{Cakes[chosenCake].title}</h4>
                            <p>
                                <b>Description: </b> {Cakes[chosenCake].description}
                            </p>
                            <div className="PriceQuantity" style={{ display: "flex" }}>
                                <div className="ChosenCakePrice">
                                    <h6>
                                        <b>Price: </b>
                                        <del>{Cakes[chosenCake].price}</del>
                                    </h6>
                                    <h6 style={{ marginLeft: "10px" }}>${String(Number(Cakes[chosenCake].price.slice(-5)) - 5).slice(0, 5)}</h6>
                                </div>
                                <div className="CakesQuantity">
                                    <h6>QUANTITY: </h6>
                                    <FiMinus
                                        className="FiMinus"
                                        style={{ fontSize: "26px", margin: "6px 8px 0 0 ", cursor: "pointer" }}
                                        onClick={() => (chosenCakeQuantity > 1 ? setChosenCakeQuantity((prevstate) => prevstate - 1) : null)}
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
                                        <span style={{ fontSize: "20px", paddingTop: "3px" }}>{chosenCakeQuantity}</span>
                                    </div>

                                    <FiPlus
                                        className=""
                                        style={{ fontSize: "26px", margin: "6px 0 0 8px", cursor: "pointer" }}
                                        onClick={() => setChosenCakeQuantity((prevstate) => prevstate + 1)}
                                    />
                                </div>
                            </div>
                            {/* <div className="ChosenCakeDeliveryDate">
                                <p>Choose the pick-up date: </p>
                                <input type="date" id="DeliveryDate" style={{ paddingRight: "10px" }} />
                            </div> */}
                            <div className="AddToCartContainerMenu">
                                <button className="waves-effect waves-light btn-medium lighten-1 black-text AddToCartMenu" onClick={addToCart}>
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                        <div className="ChosenCakeDisplayDetails"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
