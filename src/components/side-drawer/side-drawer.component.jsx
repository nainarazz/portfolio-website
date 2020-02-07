import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Container, SideDrawerItem } from './side-drawer.style';

export const SideDrawer = props => {
    return (
        <>
            <Container isOpen={props.isOpen}>
                <SideDrawerItem>
                    <Link href="#about">
                        <button onClick={props.toggleSideDrawer} type="button">
                            About
                        </button>
                    </Link>
                </SideDrawerItem>
                <SideDrawerItem>
                    <Link href="#work-experience">
                        <button onClick={props.toggleSideDrawer} type="button">
                            Work Experience
                        </button>
                    </Link>
                </SideDrawerItem>
                <SideDrawerItem>
                    <Link href="#project">
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
                    <Link href="#resume">
                        <button onClick={props.toggleSideDrawer} type="button">
                            Resume
                        </button>
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
