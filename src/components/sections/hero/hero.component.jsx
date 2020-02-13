import React from 'react';
import { HeaderColor, Content, Intro, Photo } from './hero.style';

export const Hero = () => {
    return (
        <>
            <HeaderColor>
                <Content>
                    <Intro>
                        <h3>Hi, my name is</h3>
                        <h1>Naina Razafindrabiby.</h1>
                        <h2>I build stuff for the web.</h2>
                    </Intro>
                    <Photo src="/static/images/profile-pic.jpg" />
                </Content>
            </HeaderColor>
        </>
    );
};
