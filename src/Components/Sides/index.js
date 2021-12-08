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
            <div className="SidesOutside" id="sides">
                <div className="SidesContainer">
                    <div className={leftClass} onMouseEnter={LeftHover} onMouseLeave={() => (setLeftClass("SidesLeft"), setRightClass("SidesRight"))}>
                        <a href="/create">Create Cake</a>
                    </div>
                    <div className={rightClass} onMouseEnter={RightHover} onMouseLeave={() => (setLeftClass("SidesLeft"), setRightClass("SidesRight"))}>
                        <a href="/select">Select Cake</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sides;
