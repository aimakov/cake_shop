import React from "react";

import { IntroContainer, IntroTitleWrap, IntroTitle, IntroP, IntroButton, IntroCakeWrap, IntroCake } from "./IntroElements";

import Cake from "../../images/Intro_cake.png";
import Cake2 from "../../images/Intro_cake_2.png";

const Intro = () => {
    return (
        <>
            <IntroContainer>
                <IntroCakeWrap>
                    <IntroCake src={Cake2} />
                </IntroCakeWrap>
                <IntroTitleWrap>
                    <IntroTitle>
                        You build the cake <br /> We make it real{" "}
                    </IntroTitle>
                    {/* <IntroP>We strive to bring people best cakes</IntroP> */}
                    <IntroButton>Order Here</IntroButton>
                </IntroTitleWrap>
                <IntroCakeWrap>
                    <IntroCake src={Cake} />
                </IntroCakeWrap>
            </IntroContainer>
        </>
    );
};

export default Intro;
