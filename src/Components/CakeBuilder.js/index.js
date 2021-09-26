import React from "react";
import styled from "styled-components";
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

import { Layer } from "./CakeComponents";

const CakeBuilder = () => {
    return (
        <>
            <div className="container center" style={{ height: "100vh" }}>
                <div className="row center">
                    <div className="col s12 center" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                        <img className="cake icing" src={LemonIcing} style={{ zIndex: "10" }} />
                        <img className="cake layer" src={ChocoLayer} style={{ marginTop: "-55px", zIndex: "2" }} />
                        <img className="cake cream" src={VanillaCream} style={{ marginTop: "-38px", paddingLeft: "2px", zIndex: "1" }} />
                        <img className="cake layer" src={VanillaLayer} style={{ marginTop: "-36px", zIndex: "2" }} />
                        <img className="cake cream" src={VanillaCream} style={{ marginTop: "-38px", paddingLeft: "2px", zIndex: "1" }} />
                        <img className="cake layer" src={VanillaLayer} style={{ marginTop: "-36px", zIndex: "2" }} />
                        <img className="cake cream" src={VanillaCream} style={{ marginTop: "-38px", paddingLeft: "2px", zIndex: "1" }} />
                        <img className="cake layer" src={VanillaLayer} style={{ marginTop: "-36px", zIndex: "2" }} />
                        <Layer src={VanillaLayer} />
                        <Layer src={ChocoLayer} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CakeBuilder;
