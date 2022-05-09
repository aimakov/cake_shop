import React from "react";
import "./StaffCard.css";

const StaffCard = (props) => {
    return (
        <div className="StaffCardContainer">
            <img src={props.team.img} />
            <p>
                <b>{props.team.name}</b>
            </p>
            <p>{props.team.role}</p>
        </div>
    );
};

export default StaffCard;
