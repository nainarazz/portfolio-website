import React from 'react';
import {
    CardContainer,
    CardPhoto,
    Content,
    CardTitle,
    CardDescription,
} from './horizontal-card.style';

export const HorizontalCard = () => {
    return (
        <>
            <CardContainer>
                <CardPhoto>photo here</CardPhoto>
                <Content>
                    <CardTitle>
                        <h3>What is this in JavaScript?</h3>
                        <div className="date">February 11, 2020</div>
                    </CardTitle>
                    <CardDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </CardDescription>
                </Content>
            </CardContainer>
        </>
    );
};
