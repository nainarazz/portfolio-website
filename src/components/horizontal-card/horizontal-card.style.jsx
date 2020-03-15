import styled from 'styled-components';
import { themeColor } from '../../themes/colors';

export const CardContainer = styled.div`
    display: flex;
    background-color: #fff;
    box-shadow: 0 0.15rem 0.9rem rgba(38, 50, 56, 0.2);
    margin: auto;
    margin-bottom: 20px;
    max-width: 1080px;
    width: 100%;
    flex-direction: column;
    border-radius: 8px;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const CardPhoto = styled.div`
    flex-basis: 53%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (min-width: 825px) {
        flex-basis: 35.5%;
    }
`;

export const Content = styled.div`
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
`;

export const CardTitle = styled.div`
    border-bottom: 1px solid ${themeColor.darkShade};
    h3 {
        font-size: 1.5rem;
        color: ${themeColor.darkShade};
        margin-bottom: 1rem;
    }
    .sub-title {
        padding-bottom: 10px;
        color: ${themeColor.darkShade};
    }
`;

export const CardDescription = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    color: ${themeColor.darkShade};
`;
