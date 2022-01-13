import React from "react";
import "./CakeRadio.css";

const CakeRadio = (props) => {
    return (
        <label>
            <input
                // className="orange"
                name={props.name}
                value={props.value}
                type="radio"
                checked={props.CakePart === props.value}
                onChange={() => props.setCakePart(props.value)}
            />
            <span></span>
        </label>
    );
};

export default CakeRadio;
