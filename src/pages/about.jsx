import React from 'react';
import Head from 'next/head';
import MainContent from '../components/layout/main-content/main-content.component';
import { NavBar } from '../components/layout/navbar/navbar.component';
import {
    MainContentWrapper,
    Text,
    Tech,
    TechContainer,
    Contact,
} from '../pages-styles/about.style';
import { SocialIcon } from '../components/sections/hero/hero.style';

function AboutPage() {
    const tech = [
        {
            imageUrl: '/static/images/javascript-icon.png',
            imageAlt: 'javascript',
        },
        {
            imageUrl: '/static/images/typescript-icon.png',
            imageAlt: 'typescript',
        },
        {
            imageUrl: '/static/images/saas-icon.png',
            imageAlt: 'saas',
        },
        {
            imageUrl: '/static/images/angular-icon.png',
            imageAlt: 'angular',
        },
        {
            imageUrl: '/static/images/react-icon.png',
            imageAlt: 'react',
        },
        {
            imageUrl: '/static/images/node-js-icon.png',
            imageAlt: 'node js',
        },
        {
            imageUrl: '/static/images/graphql-icon.png',
            imageAlt: 'graphql',
        },
        {
            imageUrl: '/static/images/mongodb-icon.png',
            imageAlt: 'mongodb',
        },
        {
            imageUrl: '/static/images/c-sharp-icon.png',
            imageAlt: 'c#',
        },
        {
            imageUrl: '/static/images/sql-server-icon.svg',
            imageAlt: 'sql server',
        },
    ];
    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>
            <NavBar />
            <MainContentWrapper>
                <MainContent>
                    <h1>Hi, I&apos;m Naina Razafindrabiby 👋</h1>
                    <Text>
                        Since I was small, I have been fascinated by computers. I have liked video
                        games in particular and I have dreamed of working with them one day. But
                        guess what, I have not done any game until now 😊.
                    </Text>
                    <Text>
                        I came across web development later in my life and I really enjoyed it. It
                        is just beautiful with what you can do with browsers today, so I have
                        decided to have my career built around web development.
                    </Text>
                    <Text>
                        I have studied Software Engineering in Kampala, Uganda, and shortly after
                        graduating (2017), I got my first job as a software developer in a large
                        software consulting company. Now I am working with a software startup
                        developing web applications (please see my{' '}
                        <a
                            href="https://docs.google.com/document/d/1SX8ou3-uwcEK0hTY4cch4gL3dQWmbG_YjlPdoqYWSS4/edit?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            resume
                        </a>{' '}
                        for my working experience).
                    </Text>
                    <Text>
                        I mainly use JavaScript across the whole stack. Here are some of the
                        technologies I have worked with.
                    </Text>
                    <TechContainer>
                        {tech.map((t, index) => (
                            <Tech key={index} src={t.imageUrl} alt={t.imageAlt} />
                        ))}
                    </TechContainer>
                    <Text>
                        If you have anything for me, feel free to leave me a message on LinkedIn or
                        my email.
                    </Text>
                    <Contact
                        href="https://linkedin.com/in/nainarazz"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/static/images/linkedin-logo.png" alt="linkedin" />
                    </Contact>
                    <Contact href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#110;&#97;&#105;&#110;&#97;&#114;&#97;&#122;&#122;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
                        <img src="/static/images/email-logo.png" alt="gmail" />
                    </Contact>
                </MainContent>
            </MainContentWrapper>
        </>
    );
}

export default AboutPage;
