import React, { useState, useEffect } from "react";
import "./Sides.css";

const Sides = (props) => {
    const [leftClass, setLeftClass] = useState("SidesLeft");
    const [rightClass, setRightClass] = useState("SidesRight");
    const [left, setLeft] = useState("0");

    const LeftHover = () => {
        setLeftClass("SidesLeft LeftBig");
        setRightClass("SidesRight RightSmall");
    };

    const RightHover = () => {
        setLeftClass("SidesLeft LeftSmall");
        setRightClass("SidesRight RightBig");
    };

    useEffect(() => {
        if (props.active === "create") {
            setLeft("100vw");
        } else if (props.active === "sides") {
            setLeft("0");
        } else if (props.active === "select") {
            setLeft("-100vw");
        }
    }, [props.active]);

    return (
        <>
            <div className="SidesOutside" id="sides" style={{ left: left }}>
                <div className="SidesContainer">
                    <div
                        className={leftClass}
                        onMouseEnter={LeftHover}
                        onMouseLeave={() => {
                            setLeftClass("SidesLeft");
                            setRightClass("SidesRight");
                        }}
                    >
                        <button onClick={() => props.setActive("create")}>
                            <p>Create Cake</p>
                        </button>
                    </div>
                    <div
                        className={rightClass}
                        onMouseEnter={RightHover}
                        onMouseLeave={() => {
                            setLeftClass("SidesLeft");
                            setRightClass("SidesRight");
                        }}
                    >
                        <button onClick={() => props.setActive("select")}>
                            <p>Select Cake</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sides;
