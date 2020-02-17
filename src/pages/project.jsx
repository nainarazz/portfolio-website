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

const SubTitleLink = styled.a`
    text-decoration: none;
    margin-right: 20px;
    img {
        height: 40px;
        width: 40px;
        vertical-align: middle;
    }
`;

const TechChips = styled.div`
    display: flex;
    flex-wrap: wrap;
    div {
        border-radius: 8px;
        background-color: ${themeColor.mainBrand};
        color: #fff;
        margin-right: 20px;
        margin-bottom: 10px;
        padding: 10px;
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
                    subTitle={
                        <>
                            <SubTitleLink
                                href="https://github.com/nainarazz/gourmetic"
                                target="_blank"
                            >
                                <img src="/static/images/github-logo.png" alt="github" />
                                <span>Github</span>
                            </SubTitleLink>
                            <SubTitleLink href="https://gourmetic.nainarazz.now.sh" target="_blank">
                                <img src="/static/images/redirection-icon.png" alt="website" />
                                <span>Website</span>
                            </SubTitleLink>
                        </>
                    }
                    title="Gourmetic"
                    photoUrl=""
                    description="Have you ever run out of ideas on what to cook on your next meal? Gourmetic is a simple food recipe app that can help you find a recipe for your next meal."
                >
                    <TechChips>
                        <div>TypeScript</div>
                        <div>Next.js</div>
                        <div>Styled Components</div>
                        <div>Graphql</div>
                        <div>Express</div>
                        <div>MongoDb</div>
                    </TechChips>
                </HorizontalCard>

                <HorizontalCard
                    subTitle={
                        <>
                            <SubTitleLink
                                href="https://github.com/nainarazz/is-series-good-react"
                                target="_blank"
                            >
                                <img src="/static/images/github-logo.png" alt="github" />
                                <span>Github</span>
                            </SubTitleLink>
                            <SubTitleLink
                                href="https://nainarazz.github.io/is-series-good-react/"
                                target="_blank"
                            >
                                <img src="/static/images/redirection-icon.png" alt="website" />
                                <span>Website</span>
                            </SubTitleLink>
                        </>
                    }
                    title="Is-series-good?"
                    photoUrl=""
                    description="This is a react side project that allows you to know if a tv show is worth watching based on its ratings."
                >
                    <TechChips>
                        <div>JavaScript</div>
                        <div>React</div>
                        <div>Material UI</div>
                        <div>React-AutoSuggest</div>
                        <div>TV Maze TMDB Trakt</div>
                        <div>Redux</div>
                    </TechChips>
                </HorizontalCard>

                <HorizontalCard
                    subTitle={
                        <>
                            <SubTitleLink
                                href="https://github.com/nainarazz/portfolio-website"
                                target="_blank"
                            >
                                <img src="/static/images/github-logo.png" alt="github" />
                                <span>Github</span>
                            </SubTitleLink>
                        </>
                    }
                    title="Personal Website"
                    photoUrl=""
                    description="This is my personal website and blog. "
                >
                    <TechChips>
                        <div>JavaScript</div>
                        <div>Styled Components</div>
                        <div>Next.js</div>
                        <div>Strapi</div>
                    </TechChips>
                </HorizontalCard>

                <HorizontalCard
                    subTitle={
                        <>
                            <SubTitleLink
                                href="https://github.com/withspectrum/spectrum"
                                target="_blank"
                            >
                                <img src="/static/images/github-logo.png" alt="github" />
                                <span>Github</span>
                            </SubTitleLink>
                            <SubTitleLink href="https://spectrum.chat" target="_blank">
                                <img src="/static/images/redirection-icon.png" alt="website" />
                                <span>Website</span>
                            </SubTitleLink>
                        </>
                    }
                    title="Spectrum"
                    photoUrl=""
                    description="Simple, powerful online communities. This is an established open-source project for building communities online. I liked the project so I decided to contribute to it."
                >
                    <TechChips>
                        <div>JavaScript</div>
                        <div>Flow</div>
                        <div>Styled Components</div>
                        <div>Graphql</div>
                    </TechChips>
                </HorizontalCard>

                <HorizontalCard
                    subTitle=""
                    title="Drug Inventory System"
                    photoUrl=""
                    description="A software that automates the counting of stock and notification of expiring drugs in a small drug store."
                >
                    <TechChips>
                        <div>C#</div>
                        <div>WinForm</div>
                        <div>SQL Server 2012</div>
                    </TechChips>
                </HorizontalCard>
            </MainContent>
        </>
    );
}

export default ProjectPage;
