import React from "react";

import { IntroContainer, IntroTitleWrap, IntroTitle, IntroP, IntroCakeWrap, IntroCake } from "./IntroElements";

import Cake from "../../images/Intro_cake.png";

const Intro = () => {
    return (
        <>
            <IntroContainer>
                <IntroTitleWrap>
                    <IntroTitle>
                        You build the cake <br /> We make it real{" "}
                    </IntroTitle>
                    <IntroP>We strive to bring people best cakes</IntroP>
                </IntroTitleWrap>
                <IntroCakeWrap>
                    <IntroCake src={Cake} />
                </IntroCakeWrap>
            </IntroContainer>
        </>
    );
};

export default Intro;
