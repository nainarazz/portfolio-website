/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import MainContent from '../components/layout/main-content/main-content.component';
import { Hero } from '../components/sections/hero/hero.component';
import { NavBar } from '../components/layout/navbar/navbar.component';
import { HorizontalCard } from '../components/horizontal-card/horizontal-card.component';
import { StyledHeading, StyledLink, CardWrapper } from '../pages-styles/index.style';
import blogPosts from '../data/blog-posts';

function HomePage() {
    return (
        <>
            <Head>
                <title>Naina Codes</title>
            </Head>
            <NavBar />
            <Hero />
            <MainContent>
                <StyledHeading>Blog Posts</StyledHeading>
                {blogPosts.slice(0, 5).map((post, index) => (
                    <Link href={post.path} key={index}>
                        <CardWrapper>
                            <HorizontalCard
                                subTitle={post.publishedAt}
                                photoAlt={post.thumbnailImageAlt}
                                title={post.title}
                                photoUrl={post.thumbnailImage}
                                description={post.summary}
                            />
                        </CardWrapper>
                    </Link>
                ))}

                <Link href="/blog">
                    <StyledLink>View all posts</StyledLink>
                </Link>
            </MainContent>
        </>
    );
}

export default HomePage;
