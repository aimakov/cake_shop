import React from "react";

const CakeRadio = (props) => {
    return (
        <label>
            <input
                className="with-gap"
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
