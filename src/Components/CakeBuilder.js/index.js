import React, { useState } from "react";
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
import CakeRadio from "./CakeRadio";

const CakeBuilder = () => {
    const [Layers, setLayers] = useState("");
    const [CreamType, setCreamType] = useState("");
    const [IcingType, setIcingType] = useState("");

    return (
        <>
            <div className="CakeBuilderContainer">
                <div className="CakeBuilderControls center-align">
                    <table className="center-align">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Vanilla</th>
                                <th>Chocolate</th>
                                <th>Lemon</th>
                                <th>Strawberry</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="cake">Layers</td>
                                <td className="center-align">
                                    <CakeRadio CakePart={Layers} name="Layers" value="Vanilla" setCakePart={setLayers} />
                                </td>
                                <td className="center-align">
                                    <CakeRadio CakePart={Layers} name="Layers" value="Chocolate" setCakePart={setLayers} />
                                </td>
                                <td className="center-align">
                                    <CakeRadio CakePart={Layers} name="Layers" value="Lemon" setCakePart={setLayers} />
                                </td>
                                <td className="center-align">
                                    <CakeRadio CakePart={Layers} name="Layers" value="Strawberry" setCakePart={setLayers} />
                                </td>
                            </tr>
                            <tr>
                                <td className="cake">Cream</td>
                                <td className="center-align">
                                    <CakeRadio CakePart={CreamType} name="Cream" value="Vanilla" setCakePart={setCreamType} />
                                </td>
                                <td className="center-align">
                                    <CakeRadio CakePart={CreamType} name="Cream" value="Chocolate" setCakePart={setCreamType} />
                                </td>
                                <td className="center-align">
                                    <CakeRadio CakePart={CreamType} name="Cream" value="Lemon" setCakePart={setCreamType} />
                                </td>
                                <td className="center-align">
                                    <CakeRadio CakePart={CreamType} name="Cream" value="Strawberry" setCakePart={setCreamType} />
                                </td>
                            </tr>
                            <tr>
                                <td className="cake">Icing</td>
                                <td className="center-align">
                                    <CakeRadio CakePart={IcingType} name="Icing" value="Vanilla" setCakePart={setIcingType} />
                                </td>
                                <td className="center-align">
                                    <CakeRadio CakePart={IcingType} name="Icing" value="Chocolate" setCakePart={setIcingType} />
                                </td>
                                <td className="center-align">
                                    <CakeRadio CakePart={IcingType} name="Icing" value="Lemon" setCakePart={setIcingType} />
                                </td>
                                <td className="center-align">
                                    <CakeRadio CakePart={IcingType} name="Icing" value="Strawberry" setCakePart={setIcingType} />
                                </td>
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
