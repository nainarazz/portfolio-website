import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NavBar } from '../components/layout/navbar/navbar.component';
import { HeaderColor } from '../components/sections/hero/hero.style';
import MainContent from '../components/layout/main-content/main-content.component';
import { HorizontalCard } from '../components/horizontal-card/horizontal-card.component';
import { ProjectIntroCard, Quote } from '../pages-styles/project.style';
import { CardWrapper } from '../pages-styles/index.style';
import blogPosts from '../data/blog-posts';

const Loader = styled.div`
    text-align: center;
`;

const StyledInfiniteScroll = styled(InfiniteScroll)`
    padding: 10px;
`;

function BlogPage() {
    const [posts, setPosts] = useState(blogPosts.slice(0, 5));
    const fetchNextPosts = () => {
        setTimeout(() => {
            const index = posts.length;
            const fetchedPosts = blogPosts.slice(index, index + 5);
            setPosts(posts.concat(fetchedPosts));
        }, 500);
    };
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
            <NavBar />
            <HeaderColor>
                <div style={{ height: 90 }}></div>
            </HeaderColor>

            <ProjectIntroCard>
                <div style={{ padding: '1em' }}>
                    <Quote>
                        Sharing is caring. If people didn't share their knowledge, we wouldn't have
                        advanced this far in the software world. Here are some of the technical and
                        non-technical things I have learned as a software developer. I hope it
                        benefits someone.
                    </Quote>
                </div>
            </ProjectIntroCard>

            <MainContent>
                <StyledInfiniteScroll
                    dataLength={blogPosts.length}
                    next={fetchNextPosts}
                    hasMore={posts.length < blogPosts.length}
                    loader={<Loader>loading...</Loader>}
                >
                    {posts.map((post, index) => (
                        <Link href={post.path} key={index}>
                            <CardWrapper>
                                <HorizontalCard
                                    subTitle={post.publishedAt}
                                    title={post.title}
                                    photoUrl={post.backgroundImgUrl}
                                    description={post.summary}
                                />
                            </CardWrapper>
                        </Link>
                    ))}
                </StyledInfiniteScroll>
            </MainContent>
        </>
    );
}

export default BlogPage;
