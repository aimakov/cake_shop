import React from "react";

const index = () => {
    return (
        <div style={{ position: "relative" }}>
            <iframe
                width="600"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ5fkLYdEvZjURaawkGN5Fum8&key=AIzaSyDK3PXNmM90aaILBL9D_SYFexYduV-G7mM"
            ></iframe>
        </div>
    );
};

export default index;
