import React from "react";
import { loremIpsum } from "react-lorem-ipsum";
import Nurik_Aigerim_Ayana from "../../images/Staff/Nurik_Aigerim_Ayana.jpeg";
import Nurba_Hyewon from "../../images/Staff/Nurba_Hyewon.jpeg";
import StaffCard from "./StaffCard";

import "./Staff.css";

const Staff = () => {
    const StaffMembers = {
        team_Nurik: {
            // name: "Nurkanat, Aigerim, Ayana",
            name: ["Nurkanat", "Ayana", "Aigerim"],
            // role: "Owner, Main Chef & little helper",
            role: ["Owner", "Little helper", "Main Baker"],
            img: Nurik_Aigerim_Ayana,
        },
        team_Nurba: {
            name: ["Hyewon", "Nurbolat"],
            role: ["ML Engineer", "Frontend Developer"],
            // role: "FrontEnd Developer, ML Engineer",
            img: Nurba_Hyewon,
        },
    };

    return (
        <div className="StaffContainer" id="staff">
            <h3>Our Team</h3>
            {/* <p>{loremIpsum({ p: 1 })[0].split(".").slice(0, 4).join(".")}.</p> */}
            <p>Cakesie is a family-owned business. Our team consists of these beautiful people:</p>
            <div className="CardWrapper">
                <StaffCard team={StaffMembers.team_Nurik} />
                <StaffCard team={StaffMembers.team_Nurba} />
            </div>
        </div>
    );
};

export default Staff;
