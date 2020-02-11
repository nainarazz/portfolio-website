import React, { useState } from 'react';
import { Container, MenuItems, Item, Logo, Nav } from './navbar.style';
import useDocumentScrollThrottled from '../../../utilities/useDocumentScrollThrottled';
import { SideDrawer } from '../../side-drawer/side-drawer.component';
import Burger from '../../burger/burger.component';

export const NavBar = () => {
    const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);
    const [sideDrawerOpen, setDrawerOpen] = useState(false);

    const MINIMUM_SCROLL = 80;
    const TIMEOUT_DELAY = 200;

    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

        setShouldShowShadow(currentScrollTop > 2);

        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
    });

    const toggleSideDrawer = () => setDrawerOpen(!sideDrawerOpen);

    return (
        <>
            <Container shouldShowShadow={shouldShowShadow} shouldHideHeader={shouldHideHeader}>
                <Nav>
                    <Logo>NR</Logo>
                    <MenuItems>
                        <Item>About</Item>
                        <Item>Experience</Item>
                        <Item>Projects</Item>
                        <Item>Blog</Item>
                        <Item>Contact</Item>
                    </MenuItems>
                    <Burger toggleSideDrawer={toggleSideDrawer} isOpen={sideDrawerOpen} />
                    <SideDrawer isOpen={sideDrawerOpen} toggleSideDrawer={toggleSideDrawer} />
                </Nav>
            </Container>
        </>
    );
};
