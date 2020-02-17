/* eslint-disable react/self-closing-comp */
import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../components/layout/navbar/navbar.component';
import { HeaderColor } from '../components/sections/hero/hero.style';
import MainContent from '../components/layout/main-content/main-content.component';
import { HorizontalCard } from '../components/horizontal-card/horizontal-card.component';
import { themeColor } from '../themes/colors';

const ProjectIntroCard = styled.div`
    width: 90%;
    position: relative;
    top: -6em;
    z-index: 10;
    max-width: 950px;
    border-radius: 8px;
    margin: auto;
    background-color: #fff;
    box-shadow: 0 0.15rem 0.9rem rgba(38, 50, 56, 0.2);

    h1 {
        text-align: center;
        color: ${themeColor.darkShade};
    }

    p,
    q {
        line-height: 1.5;
        color: ${themeColor.darkShade};
        font-size: 1.2em;
    }

    @media (min-width: 980px) {
        width: 100%;
    }
`;

const Quote = styled.blockquote`
    position: relative;
    font-size: 1.4em;
    line-height: 1.5;
    color: ${themeColor.lightAccent};

    footer {
        font-size: 0.6em;
        font-weight: 700;
        color: ${themeColor.darkAccent};
        float: right;
    }
`;

function ProjectPage() {
    return (
        <>
            <NavBar />
            <HeaderColor>
                <div style={{ height: 90 }}></div>
            </HeaderColor>
            <ProjectIntroCard>
                <div style={{ padding: '1em' }}>
                    <Quote>
                        If you can’t fly then run, if you can’t run then walk, if you can’t walk
                        then crawl, but whatever you do you have to keep moving forward.
                        <footer>Martin Luther King Jr.</footer>
                    </Quote>
                </div>
            </ProjectIntroCard>
            <MainContent>
                <HorizontalCard
                    date={new Date().toDateString()}
                    title="What is this keyword in JavaScript?"
                    photoUrl=""
                    description="Here you add some description about your projects or posts"
                />
                <HorizontalCard
                    date={new Date().toDateString()}
                    title="What is this keyword in JavaScript?"
                    photoUrl=""
                    description="Here you add some description about your projects or posts"
                />
                <HorizontalCard
                    date={new Date().toDateString()}
                    title="What is this keyword in JavaScript?"
                    photoUrl=""
                    description="Here you add some description about your projects or posts"
                />
                <HorizontalCard
                    date={new Date().toDateString()}
                    title="What is this keyword in JavaScript?"
                    photoUrl=""
                    description="Here you add some description about your projects or posts"
                />
            </MainContent>
        </>
    );
}

export default ProjectPage;
