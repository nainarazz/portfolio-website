import React from 'react';
import MainContent from '../components/layout/main-content/main-content.component';
import { NavBar } from '../components/layout/navbar/navbar.component';
import { MainContentWrapper, Text, Tech } from '../pages-styles/about.style';

function AboutPage() {
    const tech = [
        'JavaScript',
        'TypeScript',
        'Angular',
        'React',
        'Node.js',
        'Express',
        'GraphQl',
        'MongoDb',
        'SQL Server',
    ];
    return (
        <>
            <NavBar />
            <MainContentWrapper>
                <MainContent>
                    <h1>Hi, I&apos;m Naina Razafindrabiby 👋</h1>
                    <Text>
                        Since I was small, I have been fascinated by computers. I have liked video
                        games in particular and I have dreamed of working with them one day. Up
                        until now, however, I have not made a simple game 😊. I came across web
                        development later in my life and I enjoyed it. It is just beautiful with
                        what you can do with browsers today, so I have decided to have my career
                        built around web development.
                    </Text>
                    <Text>
                        I have studied Software Engineering in Kampala, Uganda, and shortly after
                        graduating (2017), I got my first job as a software developer in a large
                        software consulting company. Now I am working with a software startup
                        developing web applications (please see my resume for my working
                        experience). I mainly use JavaScript across the whole stack. Here are the
                        technologies I have worked with.
                    </Text>
                    {tech.map(t => (
                        <Tech>{t}</Tech>
                    ))}
                </MainContent>
            </MainContentWrapper>
        </>
    );
}

export default AboutPage;
