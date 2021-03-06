import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NavBar } from '../components/layout/navbar/navbar.component';
import { HeaderColor } from '../components/sections/hero/hero.style';
import MainContent from '../components/layout/main-content/main-content.component';
import { HorizontalCard } from '../components/horizontal-card/horizontal-card.component';
import { ProjectIntroCard, Quote } from '../pages-styles/project.style';
import { CardWrapper } from '../pages-styles/index.style';
import blogPosts from '../data/blog-posts';
import { Meta } from '../components/meta/meta.component';
import { META_BLOG } from '../meta-config';
import { formatDate } from '../utilities/format-date';

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
            <Meta
                title={META_BLOG.title}
                description={META_BLOG.description}
                openGraph={{
                    type: 'website',
                    title: META_BLOG.openGraph.title,
                    description: META_BLOG.openGraph.description,
                    url: META_BLOG.openGraph.url,
                    image: META_BLOG.openGraph.image,
                }}
            />
            <NavBar />

            <ProjectIntroCard>
                <Quote>
                    Sharing is caring. If people didn't share their knowledge, we wouldn't have
                    advanced this far in the software world. Here are some of the technical and
                    non-technical things I have learned as a software developer. I hope it benefits
                    someone.
                </Quote>
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
                                    subTitle={formatDate(new Date(post.publishedAt))}
                                    title={post.title}
                                    photoUrl={post.src}
                                    photoAlt={post.alt}
                                    sizes={post.sizes}
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
