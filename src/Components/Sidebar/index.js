import React from "react";

import { SidebarContainer, SidebarWrapper, SidebarLink, AuthLink } from "./SidebarElements";

const Sidebar = (props) => {
    return (
        <>
            <SidebarContainer isOpen={props.isOpen}>
                <SidebarWrapper>
                    <SidebarLink>Build a Cake</SidebarLink>
                    <SidebarLink>Menu</SidebarLink>
                    <SidebarLink>Gallery</SidebarLink>
                    <SidebarLink>Contact Us</SidebarLink>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
