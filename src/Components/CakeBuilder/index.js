import React, { useState, useEffect, useContext } from "react";
import { FiChevronRight } from "react-icons/fi";
import "./CakeBuilder.css";

import { Layer, Cream } from "./cakeComponents";
import RadioGroup from "./RadioGroup";
import { CartContext } from "../../App";

import RenderedCake from "./RenderedCake.js";
import cakeElements from "./cakeElements";
import NumLayersControl from "./NumLayersControl";
import CakesQuantity from "./CakesQuantity";

const CakeBuilder = (props) => {
    const [LayersType, setLayersType] = useState("Vanilla");
    const [CreamType, setCreamType] = useState("Vanilla");
    const [IcingType, setIcingType] = useState("Vanilla");
    const [NumLayers, setNumLayers] = useState(2);

    const [LayerSrc, setLayerSrc] = useState(cakeElements.layer.vanilla);
    const [CreamSrc, setCreamSrc] = useState(cakeElements.cream.vanilla);
    const [IcingSrc, setIcingSrc] = useState(cakeElements.icing.vanilla);

    const [left, setLeft] = useState("-100vw");

    const cartValue = useContext(CartContext);
    const [cart, setCart] = cartValue;

    const [customCakeQuantity, setCustomCakeQuantity] = useState(1);

    useEffect(() => {
        if (IcingType === "Vanilla") {
            setIcingSrc(cakeElements.icing.vanilla);
        } else if (IcingType === "Chocolate") {
            setIcingSrc(cakeElements.icing.chocolate);
        } else if (IcingType === "Lemon") {
            setIcingSrc(cakeElements.icing.lemon);
        } else if (IcingType === "Strawberry") {
            setIcingSrc(cakeElements.icing.strawberry);
        }
    }, [IcingType]);

    useEffect(() => {
        if (LayersType === "Vanilla") {
            setLayerSrc(cakeElements.layer.vanilla);
        } else if (LayersType === "Chocolate") {
            setLayerSrc(cakeElements.layer.chocolate);
        } else if (LayersType === "Lemon") {
            setLayerSrc(cakeElements.layer.lemon);
        } else if (LayersType === "Strawberry") {
            setLayerSrc(cakeElements.layer.strawberry);
        }
    }, [LayersType]);

    useEffect(() => {
        if (CreamType === "Vanilla") {
            setCreamSrc(cakeElements.cream.vanilla);
        } else if (CreamType === "Chocolate") {
            setCreamSrc(cakeElements.cream.chocolate);
        } else if (CreamType === "Lemon") {
            setCreamSrc(cakeElements.cream.lemon);
        } else if (CreamType === "Strawberry") {
            setCreamSrc(cakeElements.cream.strawberry);
        }
    }, [CreamType]);

    let AdditionalLayers = [];

    useEffect(() => {
        for (let i = 2; i < NumLayers; i++) {
            AdditionalLayers.push(
                <>
                    <Cream src={CreamSrc} key={`${i}_cream`} />
                    <Layer src={LayerSrc} key={`${i}_layer`} />
                </>
            );
        }
        // eslint-disable-next-line
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
        window.alert("Your order has been added!");
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
        <div className="CakeBuilderContainer" style={{ left: left }}>
            <div className="CakeInside">
                <div className="WithoutOrder">
                    <RadioGroup
                        LayersType={LayersType}
                        setLayersType={setLayersType}
                        CreamType={CreamType}
                        setCreamType={setCreamType}
                        IcingType={IcingType}
                        setIcingType={setIcingType}
                    />
                    <NumLayersControl NumLayers={NumLayers} setNumLayers={setNumLayers} />
                    <RenderedCake IcingSrc={IcingSrc} LayerSrc={LayerSrc} CreamSrc={CreamSrc} NumLayers={NumLayers} />
                </div>
                <div className="Quantity_Order">
                    <CakesQuantity CakeQuantity={customCakeQuantity} setCakeQuantity={setCustomCakeQuantity} className="CustomCakesQuantity" />
                    <div className="AddToCartContainer">
                        <button className="AddToCart" onClick={addToCart}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
            <FiChevronRight
                onClick={() => props.setActive("sides")}
                style={{
                    position: "absolute",
                    top: "50%",
                    right: "1%",
                    fontSize: "3rem",
                    cursor: "pointer",
                }}
            />
        </div>
    );
};

export default CakeBuilder;
