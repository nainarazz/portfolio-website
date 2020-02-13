import React from 'react';
import { HeaderColor, Content, Intro, Photo } from './hero.style';

export const Hero = () => {
    return (
        <>
            <HeaderColor>
                <Content>
                    <Intro>
                        Hi, my name is Naina Razafindrabiby. I help people solve problems with code.
                    </Intro>
                    <Photo src="/static/images/profile-pic.jpg" />
                </Content>
            </HeaderColor>
        </>
    );
};
