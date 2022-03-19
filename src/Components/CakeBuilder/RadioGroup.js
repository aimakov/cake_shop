import React from "react";
import "./CakeBuilder.css";
import CakeRadio from "./CakeRadio";

const RadioGroup = (props) => {
    return (
        <div className="CakeBuilderControls">
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
                            <CakeRadio CakePart={props.LayersType} name="Layers" value="Vanilla" setCakePart={props.setLayersType} />
                        </td>
                        <td className="center-align">
                            <CakeRadio CakePart={props.LayersType} name="Layers" value="Chocolate" setCakePart={props.setLayersType} />
                        </td>
                        <td className="center-align">
                            <CakeRadio CakePart={props.LayersType} name="Layers" value="Lemon" setCakePart={props.setLayersType} />
                        </td>
                        <td className="center-align">
                            <CakeRadio CakePart={props.LayersType} name="Layers" value="Strawberry" setCakePart={props.setLayersType} />
                        </td>
                    </tr>
                    <tr>
                        <td className="cake">Cream</td>
                        <td className="center-align">
                            <CakeRadio CakePart={props.CreamType} name="Cream" value="Vanilla" setCakePart={props.setCreamType} />
                        </td>
                        <td className="center-align">
                            <CakeRadio CakePart={props.CreamType} name="Cream" value="Chocolate" setCakePart={props.setCreamType} />
                        </td>
                        <td className="center-align">
                            <CakeRadio CakePart={props.CreamType} name="Cream" value="Lemon" setCakePart={props.setCreamType} />
                        </td>
                        <td className="center-align">
                            <CakeRadio CakePart={props.CreamType} name="Cream" value="Strawberry" setCakePart={props.setCreamType} />
                        </td>
                    </tr>
                    <tr>
                        <td className="cake">Icing</td>
                        <td className="center-align">
                            <CakeRadio CakePart={props.IcingType} name="Icing" value="Vanilla" setCakePart={props.setIcingType} />
                        </td>
                        <td className="center-align">
                            <CakeRadio CakePart={props.IcingType} name="Icing" value="Chocolate" setCakePart={props.setIcingType} />
                        </td>
                        <td className="center-align">
                            <CakeRadio CakePart={props.IcingType} name="Icing" value="Lemon" setCakePart={props.setIcingType} />
                        </td>
                        <td className="center-align">
                            <CakeRadio CakePart={props.IcingType} name="Icing" value="Strawberry" setCakePart={props.setIcingType} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default RadioGroup;
