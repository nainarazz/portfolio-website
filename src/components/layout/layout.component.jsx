import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { StyledMain } from './layout.style';
import { themeColor } from '../../themes/colors';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${themeColor.darkGray};
        color: #fff;
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
