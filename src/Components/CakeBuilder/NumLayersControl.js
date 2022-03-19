import React from "react";
import "./CakeBuilder.css";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

const NumLayersControl = (props) => {
    return (
        <div className="NumLayersControl">
            <p id="Layers">
                <b>Layers:</b>
            </p>
            <div className="NumLayersIcons">
                <FiPlusCircle
                    id="PlusIcon"
                    style={{ margin: "0 auto", fontSize: "40px", cursor: "pointer" }}
                    onClick={() => (props.NumLayers > 4 ? null : props.setNumLayers((prevstate) => prevstate + 1))}
                />
                <span style={{ fontSize: "25px", padding: "10px 0 8px 0" }}>{props.NumLayers}</span>{" "}
                <FiMinusCircle
                    id="MinusIcon"
                    style={{ margin: "0 auto", fontSize: "40px", cursor: "pointer" }}
                    onClick={() => (props.NumLayers > 2 ? props.setNumLayers((prevstate) => prevstate - 1) : null)}
                />
            </div>
        </div>
    );
};

export default NumLayersControl;
