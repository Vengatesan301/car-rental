import React from 'react'
import { SidebarContainer , 
    Icon , 
    CloseIcon , 
    SidebarWrapper , 
    SidebarMenu , 
    SidebarLink , 
    SideBtnwrap , 
    SidebarRoute } from './sidebarelements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon></CloseIcon>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="booknow" onClick={toggle}>Book Now</SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnwrap>
                <SidebarRoute to="/logout">Logout</SidebarRoute>
            </SideBtnwrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar