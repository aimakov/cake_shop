import React from "react";
import styled from "styled-components";
import "./CakeBuilder.css";

import VanillaLayer from "../../images/CakeComponents/VanillaLayer2.png";
import ChocoLayer from "../../images/CakeComponents/ChocoLayer2.png";
import LemonLayer from "../../images/CakeComponents/LemonLayer2.png";
import StrawberryLayer from "../../images/CakeComponents/StrawberryLayer2.png";

import VanillaCream from "../../images/CakeComponents/VanillaCream.png";
import ChocoCream from "../../images/CakeComponents/ChocoCream.png";
import LemonCream from "../../images/CakeComponents/LemonCream.png";
import StrawberryCream from "../../images/CakeComponents/StrawberryCream.png";

import VanillaIcing from "../../images/CakeComponents/VanillaIcing.png";
import ChocoIcing from "../../images/CakeComponents/ChocoIcing.png";
import LemonIcing from "../../images/CakeComponents/LemonIcing.png";
import StrawberryIcing from "../../images/CakeComponents/StrawberryIcing.png";

import { Layer, Cream, Icing } from "./CakeComponents";

const CakeBuilder = () => {
    return (
        <>
            <div className="container" style={{ height: "auto" }}>
                <div className="row center">
                    <div className="col s12 center" style={{ display: "flex", flexDirection: "column" }}>
                        <img className="cake icing" src={LemonIcing} style={{ zIndex: "10" }} />
                        <img className="cake layer" src={VanillaLayer} style={{ marginTop: "-95px", zIndex: "9" }} />
                        <img className="cake cream" src={VanillaCream} style={{ marginTop: "-74px", paddingLeft: "2px", zIndex: "8" }} />
                        <img className="cake layer" src={VanillaLayer} style={{ marginTop: "-73px", zIndex: "7" }} />
                        <img className="cake cream" src={VanillaCream} style={{ marginTop: "-74px", paddingLeft: "2px", zIndex: "8" }} />
                        <img className="cake layer" src={VanillaLayer} style={{ marginTop: "-73px", zIndex: "7" }} />
                        <img className="cake cream" src={VanillaCream} style={{ marginTop: "-74px", paddingLeft: "2px", zIndex: "8" }} />
                        <img className="cake layer" src={VanillaLayer} style={{ marginTop: "-73px", zIndex: "7" }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CakeBuilder;
