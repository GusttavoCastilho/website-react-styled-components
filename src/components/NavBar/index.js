import React from 'react';

import { FaBars } from 'react-icons/fa';

import { Nav, NavLogo, NavbarContainer, MobileIcon, NavItem, NavLinks, NavMenu } from './styles';
// 30:45m
export default function NavBar () {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo  to="/" >Logo</NavLogo>
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
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}