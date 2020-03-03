import styled from 'styled-components';
import { themeColor } from '../../themes/colors';

export const PostContainer = styled.div`
    width: 90%;
    position: relative;
    top: -6em;
    z-index: 10;
    max-width: 950px;
    border-radius: 8px;
    margin: auto;
    background-color: #fff;
    box-shadow: 0 0.15rem 0.9rem rgba(38, 50, 56, 0.2);

    @media (min-width: 980px) {
        width: 100%;
    }
`;

export const Post = styled.div`
    line-height: 1.7;
    padding: 1rem 2rem;
`;

export const Title = styled.h2`
    text-align: center;
`;

export const PostImage = styled.img`
    max-width: 20%;
    display: block;
    margin: auto;
`;
