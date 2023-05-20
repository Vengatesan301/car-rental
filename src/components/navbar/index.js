import React from 'react'
import './navbar.css'
import {Link as LinkR} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import { Nav , 
  NavbarContainer , 
  NavLogo , 
  MobileIcon , 
  NavMenu , 
  NavItem , 
  NavLinks ,
  NavBtn ,
  NavBtnLink 
} from './navbarElements';

const Navbar = ({toggle}) => {

  const toggleHome = () => {
    scroll.animateTopScroll();
  }
  return (
    <>
    <div className='Navbar'>
        <div className='NavbarContainer'>
            <LinkR className='NavLogo' to="/" onClick={toggleHome}>gigo corp.</LinkR>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
            <NavItem>
                <NavLinks to="home" activeClassname='activeLink'>Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="about" activeClassname='activeLink'>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="booknow">Book Now</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services">Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="signup">Sign Up</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/logout">Logout</NavBtnLink>
            </NavBtn>
        </div>
    </div>
    
    
    </>
  )
}

export default Navbar;