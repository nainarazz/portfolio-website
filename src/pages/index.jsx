/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import MainContent from '../components/layout/main-content/main-content.component';
import { Hero } from '../components/sections/hero/hero.component';
import { NavBar } from '../components/layout/navbar/navbar.component';
import { HorizontalCard } from '../components/horizontal-card/horizontal-card.component';
import { StyledHeading, StyledLink, CardWrapper } from '../pages-styles/index.style';
import blogPosts from '../data/blog-posts';
import { Meta } from '../components/meta/meta.component';
import { META_HOME } from '../meta-config';
import { formatDate } from '../utilities/format-date';

function HomePage() {
    return (
        <>
            <Meta
                title={META_HOME.title}
                description={META_HOME.description}
                openGraph={{
                    type: 'website',
                    title: META_HOME.openGraph.title,
                    description: META_HOME.openGraph.description,
                    url: META_HOME.openGraph.url,
                    image: META_HOME.openGraph.image,
                }}
            />
            <NavBar />
            <Hero />
            <MainContent>
                <StyledHeading>Blog Posts</StyledHeading>
                {blogPosts.slice(0, 5).map((post, index) => (
                    <Link href={post.path} key={index}>
                        <CardWrapper>
                            <HorizontalCard
                                subTitle={formatDate(new Date(post.publishedAt))}
                                photoAlt={post.alt}
                                title={post.title}
                                srcSet={post.srcSet}
                                sizes={post.sizes}
                                photoUrl={post.src}
                                description={post.summary}
                            />
                        </CardWrapper>
                    </Link>
                ))}

                {blogPosts.length > 5 && (
                    <Link href="/blog">
                        <StyledLink>View all posts</StyledLink>
                    </Link>
                )}
            </MainContent>
        </>
    );
}

export default HomePage;
