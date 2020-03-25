import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    PostContainer,
    Post,
    PostImage,
    Title,
    MorePostsContainer,
    MorePostsContent,
    ButtonLink,
    ButtonLinkContainer,
    ImageAttribution,
} from './blog-post.style';
import { NavBar } from '../layout/navbar/navbar.component';
import { HeaderColor } from '../sections/hero/hero.style';
import Link from 'next/link';
import blogPosts from '../../data/blog-posts';
import { Meta } from '../meta/meta.component';
import { BASE_URL } from '../../constants';

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = array => {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
};

const BlogPost = ({ meta, children }) => {
    const [morePosts, setMorePosts] = useState([]);
    useEffect(() => {
        const posts = shuffle(blogPosts)
            .slice(0, 4)
            .filter(f => f.title !== meta.title) // do not include the current post to the suggestions of posts
            .slice(0, 3);
        setMorePosts(posts);
    }, []);

    return (
        <>
            <Meta
                title={meta.title}
                description={meta.summary}
                openGraph={{
                    type: 'article',
                    title: meta.title,
                    description: meta.summary,
                    url: `${BASE_URL}${meta.url}`,
                    image: meta.src,
                }}
            />
            <NavBar />
            <HeaderColor>
                <div style={{ height: 90 }}></div>
            </HeaderColor>

            <PostContainer>
                <Post>
                    <Title>{meta.title}</Title>
                    {meta.src && <PostImage srcSet={meta.srcSet} src={meta.src} alt={meta.alt} />}
                    {meta.imgAuthorAttribution && (
                        <ImageAttribution>
                            by {meta.imgAuthorAttribution} <i>{meta.imgAttributionUrl}</i>
                        </ImageAttribution>
                    )}
                    {children}
                </Post>
            </PostContainer>
            {morePosts.length > 0 && (
                <MorePostsContainer>
                    <MorePostsContent>
                        <h2>More Posts</h2>
                        {morePosts.map((p, index) => (
                            <ButtonLinkContainer key={index}>
                                <Link href={p.path}>
                                    <ButtonLink>{p.title}</ButtonLink>
                                </Link>
                            </ButtonLinkContainer>
                        ))}
                    </MorePostsContent>
                </MorePostsContainer>
            )}
        </>
    );
};

BlogPost.propTypes = {
    meta: PropTypes.object.isRequired,
    children: PropTypes.node,
};

export default BlogPost;
