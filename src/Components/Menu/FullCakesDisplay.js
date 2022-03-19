import React from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import MenuElement from "./MenuElement";

const FullCakesDisplay = (props) => {
    return (
        <div className="CakesDisplay">
            <button className="changeCakeButton" onClick={() => props.setCurrentCake((prevstate) => (prevstate - 1 + props.Cakes.length) % props.Cakes.length)}>
                <VscChevronLeft />
            </button>
            <div className="CakesDisplayImages">
                <MenuElement
                    cake={props.Cakes[(props.currentCake - 2 + props.Cakes.length) % props.Cakes.length]}
                    cake_id={(props.currentCake - 2 + props.Cakes.length) % props.Cakes.length}
                    setChosenCake={props.setChosenCake}
                />
                <MenuElement
                    cake={props.Cakes[(props.currentCake - 1 + props.Cakes.length) % props.Cakes.length]}
                    cake_id={(props.currentCake - 1 + props.Cakes.length) % props.Cakes.length}
                    setChosenCake={props.setChosenCake}
                />{" "}
                <MenuElement cake={props.Cakes[props.currentCake]} cake_id={props.currentCake} setChosenCake={props.setChosenCake} />{" "}
                <MenuElement
                    cake={props.Cakes[(props.currentCake + 1) % props.Cakes.length]}
                    cake_id={(props.currentCake + 1) % props.Cakes.length}
                    setChosenCake={props.setChosenCake}
                />
                <MenuElement
                    cake={props.Cakes[(props.currentCake + 2) % props.Cakes.length]}
                    cake_id={(props.currentCake + 2) % props.Cakes.length}
                    setChosenCake={props.setChosenCake}
                />
            </div>
            <button className="changeCakeButton" onClick={() => props.setCurrentCake((prevstate) => (prevstate + 1) % props.Cakes.length)}>
                <VscChevronRight />
            </button>
        </div>
    );
};

export default FullCakesDisplay;
