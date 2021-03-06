/* eslint-disable react/self-closing-comp */
import React from 'react';
import { NavBar } from '../components/layout/navbar/navbar.component';
import { HeaderColor } from '../components/sections/hero/hero.style';
import MainContent from '../components/layout/main-content/main-content.component';
import { HorizontalCard } from '../components/horizontal-card/horizontal-card.component';
import { ProjectIntroCard, Quote, TechChips, SubTitleLink } from '../pages-styles/project.style';
import { projects } from '../data/project';
import { Meta } from '../components/meta/meta.component';
import { META_PROJECT } from '../meta-config';

function ProjectPage() {
    return (
        <>
            <Meta
                title={META_PROJECT.title}
                description={META_PROJECT.description}
                openGraph={{
                    type: 'website',
                    title: META_PROJECT.openGraph.title,
                    description: META_PROJECT.openGraph.description,
                    url: META_PROJECT.openGraph.url,
                    image: META_PROJECT.openGraph.image,
                }}
            />
            <NavBar />

            <ProjectIntroCard>
                <Quote>
                    If you can’t fly then run, if you can’t run then walk, if you can’t walk then
                    crawl, but whatever you do you have to keep moving forward.
                    <footer>Martin Luther King Jr.</footer>
                </Quote>
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
