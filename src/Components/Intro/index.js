import React from "react";
import "./Intro.css";
import Cake_1 from "../../images/Intro_cake.png";
import Cake_2 from "../../images/Intro_cake_2.png";
import styled from "styled-components";
import Blob from "./Blob";

import { Link } from "react-scroll";

const Intro = () => {
    const StartNow = () => {
        window.scroll(0, 0);
    };

    const StartNowButton = styled(Link)`
        width: 180px;
        border-radius: 20px;
    `;

    return (
        <>
            <div className="IntroContainer">
                <Blob />
                <div className="IntroText">
                    <p>#1 Cakes in Ulsan</p>
                    <p className="slogan">
                        YOU BUILD THE CAKE <br /> WE MAKE IT REAL{" "}
                    </p>
                    <p style={{ fontSize: "1rem", paddingBottom: "20px", width: "70%" }}>
                        Hi, I'm Nurbolat, people call me Nurba. I'm currently practicing my graphic design skills and building landing pages for small
                        businesses.{" "}
                    </p>
                    <StartNowButton
                        to="sides"
                        smooth={true}
                        duration={750}
                        spy={true}
                        exact="true"
                        onClick={StartNow}
                        className="waves-effect waves-light btn-large orange lighten-1 black-text"
                    >
                        Start Now
                    </StartNowButton>
                </div>
            </div>
        </>
    );
};

export default Intro;
