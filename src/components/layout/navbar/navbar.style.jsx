import styled from 'styled-components';
import { themeColor } from '../../../themes/colors';

export const Container = styled.div`
    position: fixed;
    z-index: 400;
    background-color: ${themeColor.mainBrand};
    width: 100%;
    height: 100px;
    display: flex;
    box-shadow: ${props => (props.shouldShowShadow ? '0 9px 9px -9px rgba(0, 0, 0, 1.13)' : '')};
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
`;

export const Logo = styled.div`
    padding: 10px;
    font-size: 1.2rem;
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
`;
