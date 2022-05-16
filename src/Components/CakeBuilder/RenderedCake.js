import React from "react";
import { Icing, Layer, Cream } from "./cakeComponents";
import "./CakeBuilder.css";

const RenderedCake = (props) => {
    return (
        <div className={`RenderedCake ${props.small ? "smallCake" : null}`}>
            <Icing src={props.IcingSrc} small={props.small} />
            <Layer src={props.LayerSrc} first={true} small={props.small} />
            <Cream src={props.CreamSrc} small={props.small} />
            <Layer src={props.LayerSrc} small={props.small} />
            {React.Children.toArray(
                [...Array(props.NumLayers - 2)].map((x, i) => (
                    <>
                        <Cream src={props.CreamSrc} small={props.small} />
                        <Layer src={props.LayerSrc} small={props.small} />
                    </>
                ))
            )}
        </div>
    );
};

export default RenderedCake;
