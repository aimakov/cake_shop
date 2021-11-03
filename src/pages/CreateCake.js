import React from "react";
import Navbar from "./../Components/Navbar/Navbar";
import CakeBuilder from "../Components/CakeBuilder";
import Footer from "../Components/Footer";
const CreateCake = () => {
    return (
        <>
            {" "}
            <Navbar />
            {/* <h4 style={{ paddingTop: "150px" }}>Create your own cake:</h4> */}
            <CakeBuilder />
            <Footer />
        </>
    );
};

export default CreateCake;
