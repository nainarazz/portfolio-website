import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { StyledMain } from './layout.style';
import { themeColor } from '../../themes/colors';
import { NavBar } from '../navbar/navbar.component';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: ${themeColor.darkGray};
        color: #fff;
    }
`;

const Layout = props => {
    return (
        <>
            <GlobalStyle />
            <NavBar />
            <StyledMain>{props.children}</StyledMain>
            /**footer here */
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
