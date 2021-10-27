import React from "react";
import Navbar from "./../Components/Navbar/Navbar";
import CakeBuilder from "../Components/CakeBuilder";
const CreateCake = () => {
    return (
        <>
            {" "}
            <Navbar />
            {/* <h4 style={{ paddingTop: "150px" }}>Create your own cake:</h4> */}
            <CakeBuilder />
        </>
    );
};

export default CreateCake;
