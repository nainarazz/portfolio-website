import styled from 'styled-components';

export const PostContainer = styled.div`
    width: 95%;
    max-width: 800px;
    border-radius: 8px;
    margin: auto;
    background-color: #fff;

    @media (min-width: 980px) {
        width: 100%;
    }
`;

export const Post = styled.div`
    line-height: 1.85;
    padding: 1rem;
    text-align: left;
    margin-top: 100px;

    code {
        background: #f4f3fa;
        padding: 3px;
        font-style: italic;
    }

    a {
        text-decoration: none;
    }
`;

export const Title = styled.h2`
    text-align: center;
`;

export const PostImage = styled.img`
    max-width: 70%;
    display: block;
    margin: auto;
`;

export const ImageAttribution = styled.div`
    font-size: 0.9rem;
    text-align: center;
`;

export const MorePostsContainer = styled.div`
    width: 95%;
    position: relative;
    top: -4em;
    max-width: 800px;
    border-radius: 8px;
    margin: auto;
    background-color: #fff;
    box-shadow: 0 0.15rem 0.9rem rgba(38, 50, 56, 0.2);

    h2 {
        text-align: center;
    }
    @media (min-width: 980px) {
        width: 100%;
    }
`;

export const ButtonLink = styled.a`
    text-align: left;
    margin: 0.5em;
    border-bottom: 1px solid;
    padding: 0.75rem;
    font-size: 1.4rem;
    display: block;
    float: left;
    clear: both;
    font-size: 1.2rem;

    transition: background-color 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s,
        border-radius 0.2s;
`;

export const ButtonLinkContainer = styled.div``;

export const MorePostsContent = styled.div`
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    margin-top: 100px;

    & div:nth-child(2) {
        ${ButtonLink} {
            color: #bd3ab6;
            &:hover {
                background-color: #bd3ab6;
                color: #fff;
                border-radius: 8px;
                cursor: pointer;
            }
        }
    }

    & div:nth-child(3) {
        ${ButtonLink} {
            color: #56bd28;
            &:hover {
                background-color: #56bd28;
                color: #fff;
                border-radius: 8px;
                cursor: pointer;
            }
        }
    }

    & div:nth-child(4) {
        ${ButtonLink} {
            color: #702e6d;
            &:hover {
                background-color: #702e6d;
                color: #fff;
                border-radius: 8px;
                cursor: pointer;
            }
        }
    }
`;
