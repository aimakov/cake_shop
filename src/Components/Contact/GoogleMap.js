import React from "react";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";

const GoogleMap = () => {
    const { height, width } = useWindowDimensions();

    return (
        <iframe
            // width="480"
            // height="360"
            width={width > 1023 ? "480" : "300"}
            // width="100%"
            height={width > 1023 ? "360" : "240"}
            style={{ border: "0", borderRadius: "20px", boxShadow: "0 8px 12px 0 rgba(0, 0, 0, 0.2)", margin: "0 auto" }}
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ5fkLYdEvZjURaawkGN5Fum8&key=AIzaSyDK3PXNmM90aaILBL9D_SYFexYduV-G7mM"
        ></iframe>
    );
};

export default GoogleMap;
