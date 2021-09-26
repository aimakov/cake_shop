import styled from "styled-components";

import VanillaLayer from "../../images/CakeComponents/VanillaLayer3.png";
import ChocoLayer from "../../images/CakeComponents/ChocoLayer3.png";
import LemonLayer from "../../images/CakeComponents/LemonLayer3.png";
import StrawberryLayer from "../../images/CakeComponents/StrawberryLayer3.png";

export const Layer = styled.img`
    width: 300px;
    margin-top: -27px;

    @media (max-width: 768px) {
        width: 600px;
        margin-top: -54px;
    }
`;
