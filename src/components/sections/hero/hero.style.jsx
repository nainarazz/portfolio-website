import styled from 'styled-components';
import { themeColor } from '../../../themes/colors';

export const HeaderColor = styled.div`
    background-color: ${themeColor.mainBrand};
    background: linear-gradient(to right, ${themeColor.darkShade}, ${themeColor.mainBrand});
    color: #fff;
    padding: 120px 2rem 2rem;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: 800px;
    margin: auto;
    flex-direction: column-reverse;
    align-items: center;

    @media (min-width: 968px) {
        flex-direction: row;
    }
`;

export const Intro = styled.div`
    line-height: 1.5;
    text-align: center;
    margin: auto;
    margin-top: 40px;

    h1 {
        margin: 0;
        font-size: 1.5rem;
        color: #fff;
    }

    h2 {
        margin: 0;
        color: ${themeColor.lightShade};
        font-size: 1.3rem;
    }

    h3 {
        margin: 0;
        color: ${themeColor.lightAccent};
        font-size: 1.1rem;
    }

    @media (min-width: 380px) {
        h1 {
            font-size: 1.7rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1.3rem;
        }
    }

    @media (min-width: 480px) {
        h1 {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.5rem;
        }
    }

    @media (min-width: 968px) {
        text-align: left;
        margin-right: 15%;
    }
`;

export const SocialIconContainer = styled.div`
    margin-top: 20px;
`;

export const SocialIcon = styled.a`
    text-decoration: none;
    margin-right: 20px;
    img {
        height: 35px;
    }
`;
export const Photo = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;
