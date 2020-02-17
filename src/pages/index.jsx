/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import MainContent from '../components/layout/main-content/main-content.component';
import { Hero } from '../components/sections/hero/hero.component';
import { themeColor } from '../themes/colors';
import { NavBar } from '../components/layout/navbar/navbar.component';
import { Footer } from '../components/layout/footer/footer.component';
import { HorizontalCard } from '../components/horizontal-card/horizontal-card.component';

const StyledHeading = styled.h2`
    color: ${themeColor.darkShade};
    text-align: center;
    font-size: 2rem;
`;

const StyledLink = styled.a`
    color: ${themeColor.lightAccent};
    font-size: 1.2rem;
    text-decoration: none;
    display: block;
    text-align: center;
`;

function HomePage() {
    return (
        <>
            <NavBar />
            <Hero />
            <MainContent>
                <StyledHeading>Blog Posts</StyledHeading>
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
                <Link href="/blog">
                    <StyledLink>View all posts</StyledLink>
                </Link>
            </MainContent>
            <Footer />
        </>
    );
}

export default HomePage;
