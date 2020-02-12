import React, { useState } from 'react';
import Link from 'next/link';
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
                    <Link href="/">
                        <Logo>NR</Logo>
                    </Link>
                    <MenuItems>
                        <Link href="/about">
                            <Item>About</Item>
                        </Link>
                        <Link href="/project">
                            <Item>Projects</Item>
                        </Link>
                        <Link href="/blog">
                            <Item>Blog</Item>
                        </Link>
                        <Link href="/resume">
                            <Item>Resumé</Item>
                        </Link>
                    </MenuItems>
                    <Burger toggleSideDrawer={toggleSideDrawer} isOpen={sideDrawerOpen} />
                    <SideDrawer isOpen={sideDrawerOpen} toggleSideDrawer={toggleSideDrawer} />
                </Nav>
            </Container>
        </>
    );
};
