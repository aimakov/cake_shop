import React, { useState, useEffect } from "react";

import VanillaCake from "../../images/CakeComponents/SVG/VanillaCake.svg";
import ChocoCake from "../../images/CakeComponents/ChocoCake.png";
import LemonCake from "../../images/CakeComponents/LemonCake.png";
import StrawberryCake from "../../images/CakeComponents/StrawberryCake.png";

import VanillaAddition from "../../images/CakeComponents/SVG/VanillaAddition.svg";
import ChocoAddition from "../../images/CakeComponents/ChocoAddition.png";
import LemonAddition from "../../images/CakeComponents/LemonAddition.png";
import StrawberryAddition from "../../images/CakeComponents/StrawberryAddition.png";

import { Mainbody, FullLayer } from "./CakeOutsideComponents";
import "./CakeOutside.css";

import CakeRadio from "../CakeBuilder/CakeRadio";

const CakeOutside = (props) => {
    const [CoverSrc, setCoverSrc] = useState(VanillaCake);
    const [AdditionSrc, setAdditionSrc] = useState(VanillaAddition);

    useEffect(() => {
        if (props.IcingType === "Vanilla") {
            setCoverSrc(VanillaCake);
            setAdditionSrc(VanillaAddition);
        } else if (props.IcingType === "Chocolate") {
            setCoverSrc(ChocoCake);
            setAdditionSrc(ChocoAddition);
        } else if (props.IcingType === "Lemon") {
            setCoverSrc(LemonCake);
            setAdditionSrc(LemonAddition);
        } else if (props.IcingType === "Strawberry") {
            setCoverSrc(StrawberryCake);
            setAdditionSrc(StrawberryAddition);
        }
    }, [props.IcingType]);

    return (
        <>
            <div className="CakeOutside container">
                <div className="WholeCakeContainer">
                    <Mainbody src={CoverSrc} />
                    {[...Array(props.NumLayers - 2)].map((x, i) => (
                        <>
                            <FullLayer src={AdditionSrc} key={`${i}th Cream`} />
                        </>
                    ))}
                    {/* <FullLayer src={VanillaAddition} /> */}
                </div>
                <div className="CakeBuilderControls center-align">
                    <table className="center-align">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Berries</th>
                                <th>Fruits</th>
                                <th>Chocolate crumbs</th>
                                <th>Whipped Cream</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="cake">Layers</td>
                                <td className="center-align">
                                    <CakeRadio name="Top" value="Berries" />
                                </td>
                                <td className="center-align">
                                    <CakeRadio name="Top" value="Fruits" />
                                </td>
                                <td className="center-align">
                                    <CakeRadio name="Top" value="Chocolate crumbs" />
                                </td>
                                <td className="center-align">
                                    <CakeRadio name="Top" value="Whipped Cream" />
                                </td>
                            </tr>
                            <tr>
                                <td className="cake">Cream</td>
                                <td className="center-align">
                                    <CakeRadio name="Cream" value="Vanilla" />
                                </td>
                                <td className="center-align">
                                    <CakeRadio name="Cream" value="Chocolate" />
                                </td>
                                <td className="center-align">
                                    <CakeRadio name="Cream" value="Lemon" />
                                </td>
                                <td className="center-align">
                                    <CakeRadio name="Cream" value="Strawberry" />
                                </td>
                            </tr>
                            <tr>
                                <td className="cake">Icing</td>
                                <td className="center-align">
                                    <CakeRadio name="Icing" value="Vanilla" />
                                </td>
                                <td className="center-align">
                                    <CakeRadio name="Icing" value="Chocolate" />
                                </td>
                                <td className="center-align">
                                    <CakeRadio name="Icing" value="Lemon" />
                                </td>
                                <td className="center-align">
                                    <CakeRadio name="Icing" value="Strawberry" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default CakeOutside;
