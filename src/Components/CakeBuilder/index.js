import React, { useState, useEffect, useContext } from "react";
// import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
// import { FiMinusCircle } from "react-icons/fi";
// import { VscChromeMinimize } from "react-icons/vsc";
import { FiPlusCircle, FiMinusCircle, FiChevronRight, FiMinus, FiPlus } from "react-icons/fi";
import "./CakeBuilder.css";

import VanillaLayer from "../../images/CakeComponents/VanillaLayer3.png";
import ChocoLayer from "../../images/CakeComponents/ChocoLayer3.png";
import LemonLayer from "../../images/CakeComponents/LemonLayer3.png";
import StrawberryLayer from "../../images/CakeComponents/StrawberryLayer3.png";

import VanillaCream from "../../images/CakeComponents/VanillaCream.png";
import ChocoCream from "../../images/CakeComponents/ChocoCream.png";
import LemonCream from "../../images/CakeComponents/LemonCream.png";
import StrawberryCream from "../../images/CakeComponents/StrawberryCream.png";

import VanillaIcing from "../../images/CakeComponents/VanillaIcing.png";
import ChocoIcing from "../../images/CakeComponents/ChocoIcing.png";
import LemonIcing from "../../images/CakeComponents/LemonIcing.png";
import StrawberryIcing from "../../images/CakeComponents/StrawberryIcing.png";

import { Layer, Cream, Icing } from "./CakeComponents";
import RadioGroup from "./RadioGroup";
import { CartContext } from "../../App";

import RenderedCake from "./RenderedCake.js";

const CakeBuilder = (props) => {
    const [LayersType, setLayersType] = useState("Vanilla");
    const [CreamType, setCreamType] = useState("Vanilla");
    const [IcingType, setIcingType] = useState("Vanilla");
    const [NumLayers, setNumLayers] = useState(2);

    const [LayerSrc, setLayerSrc] = useState(VanillaLayer);
    const [CreamSrc, setCreamSrc] = useState(VanillaCream);
    const [IcingSrc, setIcingSrc] = useState(VanillaIcing);

    const [left, setLeft] = useState("-100vw");

    const cartValue = useContext(CartContext);
    const [cart, setCart] = cartValue;

    const [customCakeQuantity, setCustomCakeQuantity] = useState(1);

    useEffect(() => {
        if (IcingType === "Vanilla") {
            setIcingSrc(VanillaIcing);
        } else if (IcingType === "Chocolate") {
            setIcingSrc(ChocoIcing);
        } else if (IcingType === "Lemon") {
            setIcingSrc(LemonIcing);
        } else if (IcingType === "Strawberry") {
            setIcingSrc(StrawberryIcing);
        }
    }, [IcingType]);

    useEffect(() => {
        if (LayersType === "Vanilla") {
            setLayerSrc(VanillaLayer);
        } else if (LayersType === "Chocolate") {
            setLayerSrc(ChocoLayer);
        } else if (LayersType === "Lemon") {
            setLayerSrc(LemonLayer);
        } else if (LayersType === "Strawberry") {
            setLayerSrc(StrawberryLayer);
        }
    }, [LayersType]);

    useEffect(() => {
        if (CreamType === "Vanilla") {
            setCreamSrc(VanillaCream);
        } else if (CreamType === "Chocolate") {
            setCreamSrc(ChocoCream);
        } else if (CreamType === "Lemon") {
            setCreamSrc(LemonCream);
        } else if (CreamType === "Strawberry") {
            setCreamSrc(StrawberryCream);
        }
    }, [CreamType]);

    let AdditionalLayers = [];

    useEffect(() => {
        AdditionalLayers = [];
        for (let i = 2; i < NumLayers; i++) {
            AdditionalLayers.push(
                <>
                    <Cream src={LemonCream} key={`${i}_cream`} />
                    <Layer src={VanillaLayer} key={`${i}_layer`} />
                </>
            );
        }
        console.log(AdditionalLayers);
    }, [NumLayers, LayersType, CreamType]);

    useEffect(() => {
        if (props.active === "create") {
            setLeft("0");
        } else if (props.active === "sides") {
            setLeft("-100vw");
        } else if (props.active === "select") {
            setLeft("-200vw");
        }
    }, [props.active]);

    const addToCart = () => {
        const order = {
            type: "created",
            numberOfLayers: NumLayers,
            icingType: IcingType,
            creamType: CreamType,
            layerType: LayersType,
            uid: generateUID(),
            amount: customCakeQuantity,
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

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <>
            <div className="CakeBuilderWrapper" style={{ left: left }}>
                <div className="CakeBuilderContainer ">
                    <div className="CakeInside">
                        <div className="WithoutOrder">
                            <div className="CakeBuilderControls">
                                <RadioGroup
                                    LayersType={LayersType}
                                    setLayersType={setLayersType}
                                    CreamType={CreamType}
                                    setCreamType={setCreamType}
                                    IcingType={IcingType}
                                    setIcingType={setIcingType}
                                />
                            </div>
                            <div className="NumLayersControl">
                                <p id="Layers">
                                    <b>Layers:</b>
                                </p>
                                <div className="NumLayersIcons">
                                    <FiPlusCircle
                                        id="PlusIcon"
                                        style={{ margin: "0 auto", fontSize: "40px", cursor: "pointer" }}
                                        onClick={() => (NumLayers > 4 ? null : setNumLayers((prevstate) => prevstate + 1))}
                                    />
                                    <span style={{ fontSize: "25px", padding: "10px 0 8px 0" }}>{NumLayers}</span>{" "}
                                    <FiMinusCircle
                                        id="MinusIcon"
                                        style={{ margin: "0 auto", fontSize: "40px", cursor: "pointer" }}
                                        onClick={() => (NumLayers > 2 ? setNumLayers((prevstate) => prevstate - 1) : null)}
                                    />
                                </div>
                            </div>
                            <RenderedCake IcingSrc={IcingSrc} LayerSrc={LayerSrc} CreamSrc={CreamSrc} NumLayers={NumLayers} />
                        </div>

                        <div className="CustomCakesQuantity">
                            <h6 style={{ marginRight: "10px" }}>QUANTITY: </h6>
                            <FiMinus
                                className="FiMinus"
                                style={{ fontSize: "26px", margin: "6px 8px 0 0 ", cursor: "pointer" }}
                                onClick={() => (customCakeQuantity > 1 ? setCustomCakeQuantity((prevstate) => prevstate - 1) : null)}
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
                                <span style={{ fontSize: "20px", paddingTop: "3px" }}>{customCakeQuantity}</span>
                            </div>

                            <FiPlus
                                className=""
                                style={{ fontSize: "26px", margin: "6px 0 0 8px", cursor: "pointer" }}
                                onClick={() => setCustomCakeQuantity((prevstate) => prevstate + 1)}
                            />
                        </div>

                        <div className="AddToCartContainer">
                            <button className="waves-effect waves-light btn-medium lighten-1 black-text AddToCart" onClick={addToCart}>
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                    {/* <div>
                        <CakeOutside NumLayers={NumLayers} IcingType={IcingType} />
                        
                    </div> */}
                </div>
                <FiChevronRight
                    onClick={() => props.setActive("sides")}
                    style={{ position: "absolute", top: "50%", right: "1%", fontSize: "3rem", cursor: "pointer" }}
                />
            </div>
        </>
    );
};

export default CakeBuilder;
