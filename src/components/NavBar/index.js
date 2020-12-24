import React from 'react';

import { Nav, NavLogo, NavbarContainer } from './styles';
// 30:45m
export default function NavBar () {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo  to="/" >dolla</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}