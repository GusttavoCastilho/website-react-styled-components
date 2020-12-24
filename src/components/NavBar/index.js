import React from 'react';

import { FaBars } from 'react-icons/fa';

import {
    Nav,
    NavLogo,
    NavbarContainer,
    MobileIcon,
    NavItem,
    NavLinks,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './styles';
// 1h 09m
export default function NavBar() {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" >Logo</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}