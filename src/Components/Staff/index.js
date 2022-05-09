import React from "react";
import { loremIpsum } from "react-lorem-ipsum";
import Nurik_Aigerim_Ayana from "../../images/Staff/Nurik_Aigerim_Ayana.jpeg";
import Nurba_Hyewon from "../../images/Staff/Nurba_Hyewon.jpeg";
import StaffCard from "./StaffCard";

import "./Staff.css";

const Staff = () => {
    const StaffMembers = {
        team_Nurik: {
            name: "Nurkanat, Aigerim, Ayana",
            role: "Owner, Main Chef & little helper",
            img: Nurik_Aigerim_Ayana,
        },
        team_Nurba: {
            name: "Nurbolat & Hyewon",
            role: "FrontEnd Developer, DL Engineer",
            img: Nurba_Hyewon,
        },
    };

    return (
        <div className="StaffContainer">
            <h4>Our Team</h4>
            <p>{loremIpsum({ p: 1 })[0].split(".").slice(0, 5).join(".")}.</p>
            <div className="CardWrapper">
                <StaffCard team={StaffMembers.team_Nurik} />
                <StaffCard team={StaffMembers.team_Nurba} />
            </div>
        </div>
    );
};

export default Staff;
