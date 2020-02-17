import React from 'react';
import PropTypes from 'prop-types';
import {
    CardContainer,
    CardPhoto,
    Content,
    CardTitle,
    CardDescription,
} from './horizontal-card.style';

export const HorizontalCard = props => {
    return (
        <>
            <CardContainer>
                <CardPhoto>{props.photoUrl}</CardPhoto>
                <Content>
                    <CardTitle>
                        <h3>{props.title}</h3>
                        <div className="date">{props.date}</div>
                    </CardTitle>
                    <CardDescription>{props.description}</CardDescription>
                </Content>
            </CardContainer>
        </>
    );
};

HorizontalCard.propTypes = {
    photoUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};
