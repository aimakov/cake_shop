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

import { Layer, Cream, Icing } from "./CakeComponents";

const CakeBuilder = () => {
    return (
        <>
            <div className="CakeBuilderContainer">
                <div className="CakeBuilderControls">
                    {/* <div className="CakeBuilderFirstColumn" style={{ gridRow: "2/3", gridColumn: "1/2", borderTop: "1px solid black" }}>
                        Layers
                    </div>
                    <div className="CakeBuilderFirstColumn" style={{ gridRow: "3/4", gridColumn: "1/2" }}>
                        Cream
                    </div>
                    <div className="CakeBuilderFirstColumn" style={{ gridRow: "4/5", gridColumn: "1/2" }}>
                        Icing
                    </div>
                    <div className="CakeBuilderFirstRow" style={{ gridRow: "1/2", gridColumn: "2/3", borderLeft: "1px solid black" }}>
                        Vanilla
                    </div>
                    <div className="CakeBuilderFirstRow" style={{ gridRow: "1/2", gridColumn: "3/4" }}>
                        Chocolate
                    </div>
                    <div className="CakeBuilderFirstRow" style={{ gridRow: "1/2", gridColumn: "4/5" }}>
                        Lemon
                    </div>
                    <div className="CakeBuilderFirstRow" style={{ gridRow: "1/2", gridColumn: "5/6" }}>
                        Strawberry
                    </div> */}
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Item Name</th>
                                <th>Item Price</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Alvin</td>
                                <td>Eclair</td>
                                <td>$0.87</td>
                            </tr>
                            <tr>
                                <td>Alan</td>
                                <td>Jellybean</td>
                                <td>$3.76</td>
                            </tr>
                            <tr>
                                <td>Jonathan</td>
                                <td>Lollipop</td>
                                <td>$7.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Icing src={StrawberryIcing} />
                    <Layer src={VanillaLayer} first={true} />
                    <Cream src={LemonCream} />
                    <Layer src={VanillaLayer} />
                    <Cream src={LemonCream} />
                    <Layer src={VanillaLayer} />
                </div>
            </div>
        </>
    );
};

export default CakeBuilder;
