import React from 'react';
import { Container, MenuItems, Item, Logo, Nav } from './navbar.style';

export const NavBar = () => (
    <>
        <Container>
            <Nav>
                <Logo>NR</Logo>
                <MenuItems>
                    <Item>About</Item>
                    <Item>Experience</Item>
                    <Item>Projects</Item>
                    <Item>Contact</Item>
                </MenuItems>
            </Nav>
        </Container>
    </>
);
