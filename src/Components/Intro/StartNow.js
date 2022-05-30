import { Link } from "react-scroll";
import styled from "styled-components";

const StartNow = () => {
    const StartNowButton = styled(Link)`
        width: fit-content;
        padding: 15px 30px;
        font-size: 22px;
        border-radius: 20px;
        /* border: 1px solid white; */
        background-color: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        margin: 0 auto;
    `;

    const startNowHandler = () => {
        window.scroll(0, 0);
    };

    return (
        <StartNowButton to="sides" smooth={true} duration={750} spy={true} exact="true" onClick={startNowHandler}>
            Choose Now
        </StartNowButton>
    );
};

export default StartNow;
