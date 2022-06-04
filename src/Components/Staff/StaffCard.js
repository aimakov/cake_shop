import React from "react";
import "./StaffCard.css";

const StaffCard = (props) => {
    return (
        <div className="StaffCardContainer">
            <img src={props.team.img} alt="" />
            <div>
                {props.team.name.map((name, index) => (
                    <div className="TeamInfo">
                        <b>
                            <span>{name}</span>
                        </b>
                        <p>{props.team.role[index]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StaffCard;
