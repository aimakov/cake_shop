import React from "react";
import "./Intro.css";
import Cake_1 from "../../images/Intro_cake.png";
import Cake_2 from "../../images/Intro_cake_2.png";

const Intro = () => {
    return (
        <>
            <div className="row intro valign-wrapper ">
                <div className="col l4 hide-on-med-and-down center">
                    <img class="responsive-img intro_cake" src={Cake_1} />
                </div>
                <div className="col s12 m12 l6 center">
                    <p className="slogan">
                        You build the cake <br /> We make it real{" "}
                    </p>
                    <button className="waves-effect waves-light btn-large orange lighten-1 black-text" style={{ borderRadius: "20px" }}>
                        Order Now
                    </button>
                </div>
                <div className="col l4 hide-on-med-and-down center">
                    <img class="responsive-img intro_cake" src={Cake_2} />
                </div>
            </div>
        </>
    );
};

export default Intro;
