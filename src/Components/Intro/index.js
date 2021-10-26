import React from "react";
import "./Intro.css";
import Cake_1 from "../../images/Intro_cake.png";
import Cake_2 from "../../images/Intro_cake_2.png";
import styled from "styled-components";

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
            <div className="row intro valign-wrapper">
                <div className="col l6 hide-on-med-and-down center">
                    <img class="responsive-img intro_cake" src={Cake_1} />
                </div>
                <div className="col s12 m12 l6 IntroText">
                    <p style={{ fontSize: "1.5rem", paddingBottom: "20px" }}>#1 Cakes in Ulsan</p>
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
                {/* <div className="col l4 hide-on-med-and-down center">
                    <img class="responsive-img intro_cake" src={Cake_2} />
                </div> */}
            </div>
        </>
    );
};

export default Intro;
