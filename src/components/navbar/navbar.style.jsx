import styled from 'styled-components';
import { themeColor } from '../../themes/colors';

export const Container = styled.div`
    position: fixed;
    z-index: 400;
    background-color: ${themeColor.darkGray};
    width: 100%;
    height: 130px;
    display: flex;
    align-items: center;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
    width: 100%;
`;

export const Logo = styled.div`
    padding: 10px;
`;

export const MenuItems = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-between;
`;

export const Item = styled.div`
    font-size: 1.3rem;
`;
