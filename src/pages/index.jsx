/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import MainContent from '../components/layout/main-content/main-content.component';
import { Hero } from '../components/sections/hero/hero.component';
import { NavBar } from '../components/layout/navbar/navbar.component';
import { Footer } from '../components/layout/footer/footer.component';
import { HorizontalCard } from '../components/horizontal-card/horizontal-card.component';
import { StyledHeading, StyledLink } from '../pages-styles/index.style';

function HomePage() {
    return (
        <>
            <NavBar />
            <Hero />
            <MainContent>
                <StyledHeading>Blog Posts</StyledHeading>
                <HorizontalCard
                    subTitle={new Date().toDateString()}
                    title="What is this keyword in JavaScript?"
                    photoUrl=""
                    description="Here you add some description about your projects or posts"
                />
                <HorizontalCard
                    subTitle={new Date().toDateString()}
                    title="What is this keyword in JavaScript?"
                    photoUrl=""
                    description="Here you add some description about your projects or posts"
                />
                <HorizontalCard
                    subTitle={new Date().toDateString()}
                    title="What is this keyword in JavaScript?"
                    photoUrl=""
                    description="Here you add some description about your projects or posts"
                />
                <HorizontalCard
                    subTitle={new Date().toDateString()}
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
