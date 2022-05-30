import React from "react";
import "./Intro.css";
import Blob from "./Blob";
import StartNow from "./StartNow";
import IntroText from "./IntroText";

const Intro = () => {
    return (
        <>
            <div className="IntroContainer" id="intro">
                <Blob />
                <IntroText />
            </div>
        </>
    );
};

export default Intro;
