import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { StyledMain } from './layout.style';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #222629;
    }
`;

const Layout = props => {
    return (
        <>
            <GlobalStyle />
            /**header here */
            <StyledMain>{props.children}</StyledMain>
            /**footer here */
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
