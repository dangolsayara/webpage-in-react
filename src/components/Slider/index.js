import React from 'react'
import {SidebarContainer,
        Icon,
        CloseIcon,
        SideBtnWrap,
        SidebarWrapper,
        SidebarLink,
        SidebarRoute,
        SidebarMenu
} from './SliderElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home">
                        Home
                    </SidebarLink >
                    <SidebarLink  to="about">
                        About
                    </SidebarLink >
                    <SidebarLink to="contactus">
                        Contact Us
                    </SidebarLink>
                    <SidebarLink to="signup">
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
