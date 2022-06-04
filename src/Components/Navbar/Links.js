import "./Navbar.css";
import { Link, animateScroll } from "react-scroll";
import styled from "styled-components";

const Links = () => {
    const SLink = styled(Link)`
        font-size: 18px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
            color: orange;
        }
    `;

    return (
        <div className="Links">
            <SLink to="" smooth={true} duration={750} spy={true} exact="true" onClick={animateScroll.scrollToTop}>
                Home
            </SLink>
            <SLink to="about" smooth={true} duration={750} spy={true} exact="true">
                About
            </SLink>
            <SLink to="sides" smooth={true} duration={750} spy={true} exact="true">
                Shopping
            </SLink>
            <SLink to="staff" smooth={true} duration={750} spy={true} exact="true">
                Our Team
            </SLink>
            <SLink to="contact" smooth={true} duration={750} spy={true} exact="true">
                Contact
            </SLink>
        </div>
    );
};

export default Links;
