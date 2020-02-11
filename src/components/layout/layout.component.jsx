import React from 'react';
import PropTypes from 'prop-types';
import { StyledMain } from './layout.style';

const Layout = props => {
    return (
        <>
            <StyledMain>{props.children}</StyledMain>
            /**footer here */
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
