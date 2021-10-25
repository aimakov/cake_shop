import React, { useState } from "react";
import "./Sides.css";

const Sides = () => {
    const [leftClass, setLeftClass] = useState("SidesLeft");
    const [rightClass, setRightClass] = useState("SidesRight");

    const LeftHover = () => {
        setLeftClass("SidesLeft LeftBig");
        setRightClass("SidesRight RightSmall");
    };

    const RightHover = () => {
        setLeftClass("SidesLeft LeftSmall");
        setRightClass("SidesRight RightBig");
    };

    return (
        <>
            <div className="SidesContainer">
                <div className={leftClass} onMouseEnter={LeftHover} onMouseLeave={() => (setLeftClass("SidesLeft"), setRightClass("SidesRight"))}>
                    Left
                </div>
                <div className={rightClass} onMouseEnter={RightHover} onMouseLeave={() => (setLeftClass("SidesLeft"), setRightClass("SidesRight"))}>
                    Right
                </div>
            </div>
        </>
    );
};

export default Sides;
