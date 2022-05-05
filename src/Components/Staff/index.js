import React from "react";
import { loremIpsum } from "react-lorem-ipsum";
import Nurik_Aigerim_Ayana from "../../images/Staff/Nurik_Aigerim_Ayana.jpeg";
import Nurba_Hyewon from "../../images/Staff/Nurba_Hyewon.jpeg";
import StaffCard from "./StaffCard";

import "./Staff.css";

const Staff = () => {
    return (
        <div className="StaffContainer">
            <h4>Our Team</h4>
            <p>{loremIpsum({ p: 1 })[0].split(".").slice(0, 5).join(".")}.</p>
            <div className="CardsContainer">
                <div className="CardWrapper" id="NurikAigerimAyana">
                    {/* <img src={Nurik_Aigerim_Ayana} />
                    <div>
                        <p>Nurik</p>
                        <p>CTO</p>
                    </div> */}

                    <StaffCard img={Nurik_Aigerim_Ayana} />
                    <div>
                        <p>Aigerim</p>
                        <p>CEO & Main Chef</p>
                    </div>

                    <div>
                        <p>Ayana</p>
                        <p>Little lump of happiness</p>
                    </div>
                </div>
                <div className="CardWrapper" id="NurbaHyewon">
                    <img src={Nurba_Hyewon} />

                    <div>
                        <p>Me</p>
                        <p>FrontEnd Developer</p>
                    </div>
                    <div>
                        <p>Hyewon</p>
                        <p>My Lovely Fiancé</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Staff;
