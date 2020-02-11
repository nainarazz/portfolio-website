import styled from 'styled-components';
import { themeColor } from '../../../themes/colors';

export const HeaderColor = styled.div`
    background-color: ${themeColor.mainBrand};
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

export const Intro = styled.h1`
    line-height: 1.5;
`;

export const Photo = styled.div`
    border: 1px solid;
    width: 400px;
    height: 200px;
`;
