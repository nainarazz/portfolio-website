import styled from 'styled-components';
import { themeColor } from '../themes/colors';

export const ProjectIntroCard = styled.div`
    width: 90%;
    position: relative;
    top: -6em;
    z-index: 10;
    max-width: 950px;
    border-radius: 8px;
    margin: auto;
    background-color: #fff;
    box-shadow: 0 0.15rem 0.9rem rgba(38, 50, 56, 0.2);

    h1 {
        text-align: center;
        color: ${themeColor.darkShade};
    }

    p,
    q {
        line-height: 1.5;
        color: ${themeColor.darkShade};
        font-size: 1.2em;
    }

    @media (min-width: 980px) {
        width: 100%;
    }
`;

export const Quote = styled.blockquote`
    position: relative;
    font-size: 1.4em;
    line-height: 1.5;
    text-align: center;
    color: ${themeColor.lightAccent};

    footer {
        font-size: 0.6em;
        font-weight: 700;
        color: ${themeColor.darkAccent};
        float: right;
    }
`;

export const SubTitleLink = styled.a`
    text-decoration: none;
    margin-right: 20px;
    img {
        height: 40px;
        width: 40px;
        vertical-align: middle;
    }
`;

export const TechChips = styled.div`
    display: flex;
    flex-wrap: wrap;
    div {
        border-radius: 8px;
        background-color: ${themeColor.mainBrand};
        color: #fff;
        margin-right: 20px;
        margin-bottom: 10px;
        padding: 10px;
    }
`;
