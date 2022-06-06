import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import "./CakeBuilder.css";

const CakesQuantity = (props) => {
    return (
        <div className={props.className}>
            <p style={{ marginRight: "10px", lineHeight: "40px" }}>QUANTITY: </p>
            <FiMinus
                style={{ fontSize: "26px", margin: "6px 8px 0 0 ", cursor: "pointer" }}
                onClick={() => (props.CakeQuantity > 1 ? props.setCakeQuantity((prevstate) => prevstate - 1) : null)}
            />
            <div
                style={{
                    backgroundColor: "white",
                    width: "2.5rem",
                    height: "2.5rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <span className="QuantityNumber">{props.CakeQuantity}</span>
            </div>

            <FiPlus
                style={{ fontSize: "26px", margin: "6px 0 0 8px", cursor: "pointer" }}
                onClick={() => props.setCakeQuantity((prevstate) => prevstate + 1)}
            />
        </div>
    );
};

export default CakesQuantity;
