import React, { useState, useEffect, useContext } from "react";
import "./Menu.css";

import Cakes from "./Cakes";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { FiChevronLeft } from "react-icons/fi";

import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import { CartContext } from "../../App";
import ChosenCakeContent from "./ChosenCakeContent";
import FullCakesDisplay from "./FullCakesDisplay";

const Menu = (props) => {
    // https://sendacake.com/fresh-baked-cakes?__cf_chl_captcha_tk__=pmd_gYJr2iLHCtkiK3jo3FX5C3geeMwMFevotYt4Vr_Gc0g-1633787267-0-gqNtZGzNAyWjcnBszQ1R

    const [chosenCake, setChosenCake] = useState(0);
    const [currentCake, setCurrentCake] = useState(2);
    const [chosenCakeQuantity, setChosenCakeQuantity] = useState(1);

    const [left, setLeft] = useState("100vw");
    const [width] = useWindowDimensions();

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
                    {width > 1023 && <FullCakesDisplay currentCake={currentCake} setCurrentCake={setCurrentCake} Cakes={Cakes} setChosenCake={setChosenCake} />}
                    <div className="ChosenCakeDisplay">
                        <div className="singleMenuCake">
                            {width <= 1023 && (
                                <button
                                    className="changeCakeButton"
                                    onClick={() => setChosenCake((prevstate) => (prevstate - 1 + Cakes.length) % Cakes.length)}
                                >
                                    <VscChevronLeft />
                                </button>
                            )}

                            {/* <div className="ChosenCakeDisplayImage"> */}
                            <img id="ChosenCakeImage" src={Cakes[chosenCake].image} alt="" />
                            {/* </div> */}

                            {width <= 1023 && (
                                <button className="changeCakeButton" onClick={() => setChosenCake((prevstate) => (prevstate + 1) % Cakes.length)}>
                                    <VscChevronRight />
                                </button>
                            )}
                        </div>
                        <ChosenCakeContent
                            chosenCake={Cakes[chosenCake]}
                            CakeQuantity={chosenCakeQuantity}
                            setCakeQuantity={setChosenCakeQuantity}
                            addToCart={addToCart}
                        />
                        <div className="ChosenCakeDisplayDetails"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
