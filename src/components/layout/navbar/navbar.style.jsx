import styled from 'styled-components';
import { themeColor } from '../../../themes/colors';

export const Container = styled.div`
    position: fixed;
    z-index: 400;
    background-color: ${themeColor.mainBrand};
    background: linear-gradient(to right, ${themeColor.darkShade}, ${themeColor.mainBrand});
    width: 100%;
    height: 100px;
    display: flex;
    box-shadow: ${props => (props.shouldShowShadow ? '0 9px 9px -9px rgba(0, 0, 0, 0.5)' : '')};
    transition: top 0.3s;
    top: ${props => (props.shouldHideHeader ? '-100px' : 0)};
    align-items: center;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
    width: 100%;
    color: #fff;
    max-width: 950px;
    margin: auto;
`;

export const Logo = styled.div`
    padding: 10px;
    font-size: 1.2rem;
    &:hover {
        cursor: pointer;
    }
`;

export const MenuItems = styled.div`
    justify-content: space-between;
    display: none;

    @media (min-width: 768px) {
        display: flex;
    }
`;

export const Item = styled.div`
    font-size: 1.2rem;
    padding: 10px;
    &:hover {
        cursor: pointer;
        border-bottom: 3px solid ${themeColor.lightShade};
    }
`;
