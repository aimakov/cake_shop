import React, { useState, useEffect } from "react";
// import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
// import { FiMinusCircle } from "react-icons/fi";
// import { VscChromeMinimize } from "react-icons/vsc";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
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
    const [LayersType, setLayersType] = useState("");
    const [CreamType, setCreamType] = useState("");
    const [IcingType, setIcingType] = useState("");
    const [NumLayers, setNumLayers] = useState(2);

    // useEffect(() => {
    //     let LayersSrc =
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    let AdditionalLayers = [];
    useEffect(() => {
        AdditionalLayers = [];
        for (let i = 2; i < NumLayers; i++) {
            AdditionalLayers.push(
                <>
                    <Cream src={LemonCream} />
                    <Layer src={VanillaLayer} />
                </>
            );
        }
        console.log(AdditionalLayers);
    }, [NumLayers, LayersType, CreamType]);

    return (
        <>
            <div className="CakeBuilderContainer ">
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
                                    <CakeRadio CakePart={LayersType} name="Layers" value="Vanilla" setCakePart={setLayersType} />
                                </td>
                                <td className="center-align">
                                    <CakeRadio CakePart={LayersType} name="Layers" value="Chocolate" setCakePart={setLayersType} />
                                </td>
                                <td className="center-align">
                                    <CakeRadio CakePart={LayersType} name="Layers" value="Lemon" setCakePart={setLayersType} />
                                </td>
                                <td className="center-align">
                                    <CakeRadio CakePart={LayersType} name="Layers" value="Strawberry" setCakePart={setLayersType} />
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
                <div className="NumLayersControl">
                    <p>
                        <b>Layers:</b>
                    </p>
                    <div className="NumLayersIcons">
                        <FiChevronUp style={{ margin: "0 auto", fontSize: "60px" }} onClick={() => setNumLayers((prevstate) => prevstate + 1)} />{" "}
                        <span>{NumLayers}</span>{" "}
                        <FiChevronDown style={{ margin: "0 auto", fontSize: "60px" }} onClick={() => setNumLayers((prevstate) => prevstate - 1)} />
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Icing src={StrawberryIcing} />
                    <Layer src={VanillaLayer} first={true} />
                    {/* <Cream src={`../../images/CakeComponents/${CreamType ? CreamType : "Vanilla"}Cream.png`} /> */}
                    <Cream src={LemonCream} />
                    <Layer src={VanillaLayer} />
                    {[...Array(NumLayers - 2)].map((x, i) => (
                        <>
                            <Cream src={LemonCream} key={`${i}th Cream`} />
                            <Layer src={VanillaLayer} key={`${i}th Layer`} />
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CakeBuilder;
