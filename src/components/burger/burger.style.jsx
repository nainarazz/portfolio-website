import styled from 'styled-components';
import { themeColor } from '../../themes/colors';

export const StyledBurger = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    position: relative;
    top: 8px;
    z-index: 105;

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.2rem;
        background: ${({ open }) => (open ? '#fff' : themeColor.mainBrand)};
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }

        :nth-child(2) {
            opacity: ${({ open }) => (open ? '0' : '1')};
            transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
        }

        :nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }

    @media (min-width: 768px) {
        display: none;
    }
`;
