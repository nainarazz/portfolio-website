/* eslint-disable react/self-closing-comp */
import React from 'react';
import Head from 'next/head';
import { NavBar } from '../components/layout/navbar/navbar.component';
import { HeaderColor } from '../components/sections/hero/hero.style';
import MainContent from '../components/layout/main-content/main-content.component';
import { HorizontalCard } from '../components/horizontal-card/horizontal-card.component';
import { ProjectIntroCard, Quote, TechChips, SubTitleLink } from '../pages-styles/project.style';
import { projects } from '../data/project';

function ProjectPage() {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
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
                {projects.map((p, index) => (
                    <HorizontalCard
                        key={index}
                        subTitle={
                            <>
                                {p.github && (
                                    <SubTitleLink href={p.github} target="_blank" rel="noreferrer">
                                        <img src="/static/images/github-logo.png" alt="github" />
                                        <span>Github</span>
                                    </SubTitleLink>
                                )}

                                {p.website && (
                                    <SubTitleLink href={p.website} target="_blank" rel="noreferrer">
                                        <img
                                            src="/static/images/redirection-icon.png"
                                            alt="website"
                                        />
                                        <span>Website</span>
                                    </SubTitleLink>
                                )}
                            </>
                        }
                        title={p.name}
                        photoUrl={p.projectImageUrl}
                        photoAlt={p.imageAlt}
                        description={p.description}
                    >
                        {p.technologies.length && (
                            <TechChips>
                                {p.technologies.map((tech, index) => (
                                    <div key={index}>{tech}</div>
                                ))}
                            </TechChips>
                        )}
                    </HorizontalCard>
                ))}
            </MainContent>
        </>
    );
}

export default ProjectPage;
