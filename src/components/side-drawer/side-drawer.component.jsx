import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Container, SideDrawerItem } from './side-drawer.style';

export const SideDrawer = props => {
    return (
        <>
            <Container isOpen={props.isOpen}>
                <SideDrawerItem>
                    <Link href="/">
                        <button onClick={props.toggleSideDrawer} type="button">
                            Home
                        </button>
                    </Link>
                </SideDrawerItem>
                <SideDrawerItem>
                    <Link href="/about">
                        <button onClick={props.toggleSideDrawer} type="button">
                            About
                        </button>
                    </Link>
                </SideDrawerItem>
                <SideDrawerItem>
                    <Link href="/project">
                        <button onClick={props.toggleSideDrawer} type="button">
                            Projects
                        </button>
                    </Link>
                </SideDrawerItem>
                <SideDrawerItem>
                    <Link href="/blog">
                        <button onClick={props.toggleSideDrawer} type="button">
                            Blog
                        </button>
                    </Link>
                </SideDrawerItem>
                <SideDrawerItem>
                    <Link
                        href="https://docs.google.com/document/d/1SX8ou3-uwcEK0hTY4cch4gL3dQWmbG_YjlPdoqYWSS4/edit?usp=sharing"
                        passHref
                        prefetch={false}
                    >
                        <a
                            target="_blank"
                            onClick={props.toggleSideDrawer}
                            type="button"
                            rel="noreferrer"
                        >
                            Resumé
                        </a>
                    </Link>
                </SideDrawerItem>
            </Container>
        </>
    );
};

SideDrawer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleSideDrawer: PropTypes.func.isRequired,
};
