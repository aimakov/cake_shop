import { Link } from "react-scroll";
import styled from "styled-components";

const StartNow = () => {
    const StartNowButton = styled(Link)`
        width: 180px;
        border-radius: 20px;
    `;

    const startNowHandler = () => {
        window.scroll(0, 0);
    };

    return (
        <StartNowButton
            to="sides"
            smooth={true}
            duration={750}
            spy={true}
            exact="true"
            onClick={startNowHandler}
            className="waves-effect waves-light btn-large orange lighten-1 black-text"
        >
            Start Now
        </StartNowButton>
    );
};

export default StartNow;
