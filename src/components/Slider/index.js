import React from 'react';
import {SidebarContainer,
        Icon,
        CloseIcon,
        SideBtnWrap,
        SidebarWrapper,
        SidebarLink,
        SidebarRoute,
        SidebarMenu
} from './SliderElements';

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>
                        Home
                    </SidebarLink >
                    <SidebarLink  to="about" onClick={toggle}>
                        About
                    </SidebarLink >
                    <SidebarLink to="contactus" onClick={toggle} >
                        Contact Us
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
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
