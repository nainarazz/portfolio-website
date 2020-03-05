import React from 'react';
import PropTypes from 'prop-types';
import { StyledBurger } from './burger.style';

const Burger = props => (
    <StyledBurger onClick={props.toggleSideDrawer} open={props.isOpen} aria-label="menu">
        <div />
        <div />
        <div />
    </StyledBurger>
);

Burger.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleSideDrawer: PropTypes.func.isRequired,
};
export default Burger;
