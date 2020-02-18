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
                {props.photoUrl && (
                    <CardPhoto>
                        <img src={props.photoUrl} alt="" />
                    </CardPhoto>
                )}

                <Content>
                    <CardTitle>
                        <h3>{props.title}</h3>
                        <div className="sub-title">{props.subTitle}</div>
                    </CardTitle>
                    <CardDescription>{props.description}</CardDescription>
                    {props.children}
                </Content>
            </CardContainer>
        </>
    );
};

HorizontalCard.propTypes = {
    photoUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    description: PropTypes.string.isRequired,
    children: PropTypes.node,
};
