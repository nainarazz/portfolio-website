import styled from 'styled-components';

export const MainContentWrapper = styled.div`
    padding-top: 150px;
`;

export const Text = styled.p`
    line-height: 1.7;
    font-size: 1.2rem;

    a {
        text-decoration: none;
    }
`;

export const TechContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 180px;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const Tech = styled.img`
    margin: 10px 0;
    height: 60px;
    width: 60px;
    vertical-align: middle;
`;

export const Contact = styled.a`
    text-decoration: none;
    margin-right: 20px;
    img {
        height: 25px;
    }
`;
