import React from "react";
import "./StaffCard.css";

const StaffCard = (props) => {
    return (
        <div className="StaffCardContainer">
            <img src={props.img} />
        </div>
    );
};

export default StaffCard;
