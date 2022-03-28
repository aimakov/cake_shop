import React from "react";

const GoogleMap = () => {
    return (
        <iframe
            width="480"
            height="360"
            style={{ border: "0", borderRadius: "20px", boxShadow: "0 8px 12px 0 rgba(0, 0, 0, 0.2)" }}
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ5fkLYdEvZjURaawkGN5Fum8&key=AIzaSyDK3PXNmM90aaILBL9D_SYFexYduV-G7mM"
        ></iframe>
    );
};

export default GoogleMap;
