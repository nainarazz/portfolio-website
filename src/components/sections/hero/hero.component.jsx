import React from 'react';
import { HeaderColor, Content, Intro, Photo, SocialIcon, SocialIconContainer } from './hero.style';

export const Hero = () => {
    return (
        <>
            <HeaderColor>
                <Content>
                    <Intro>
                        <h3>Hi, my name is</h3>
                        <h1>Naina Razafindrabiby.</h1>
                        <h2>I build stuff for the web.</h2>
                        <SocialIconContainer>
                            <SocialIcon href="https://github.com/nainarazz" target="_blank">
                                <img src="/static/images/github-logo-square.png" alt="" />
                            </SocialIcon>
                            <SocialIcon href="https://linkedin.com/in/nainarazz" target="_blank">
                                <img src="/static/images/linkedin-logo.png" alt="" />
                            </SocialIcon>
                            <SocialIcon href="mailto:grecipeapp@gmail.com" target="_blank">
                                <img src="/static/images/email-logo.png" alt="" />
                            </SocialIcon>
                        </SocialIconContainer>
                    </Intro>
                    <Photo src="/static/images/profile-pic.jpg" />
                </Content>
            </HeaderColor>
        </>
    );
};
