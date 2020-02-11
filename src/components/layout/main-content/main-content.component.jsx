import React from 'react';
import PropTypes from 'prop-types';
import { StyledMain } from './main-content.style';

const MainContent = props => {
    return (
        <>
            <StyledMain>{props.children}</StyledMain>
        </>
    );
};

MainContent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainContent;
