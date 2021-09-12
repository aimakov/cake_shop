import React from "react";

import { SidebarContainer, SidebarWrapper, SidebarLink, AuthLink } from "./SidebarElements";

const Sidebar = (props) => {
    return (
        <>
            <SidebarContainer isOpen={props.isOpen}>
                <SidebarWrapper>
                    <SidebarLink></SidebarLink>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
