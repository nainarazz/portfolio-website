import React from 'react';
import PropTypes from 'prop-types';
import { PostContainer, Post, PostImage, Title } from './blog-post.style';
import { NavBar } from '../layout/navbar/navbar.component';
import { HeaderColor } from '../sections/hero/hero.style';

const BlogPost = ({ meta, children }) => {
    return (
        <>
            <NavBar />
            <HeaderColor>
                <div style={{ height: 90 }}></div>
            </HeaderColor>

            <PostContainer>
                <Post>
                    <Title>{meta.title}</Title>
                    <PostImage src={meta.backgroundImgUrl} alt="post image" />
                    {children}
                </Post>
            </PostContainer>
        </>
    );
};

BlogPost.propTypes = {
    meta: PropTypes.object.isRequired,
    children: PropTypes.node,
};

export default BlogPost;
