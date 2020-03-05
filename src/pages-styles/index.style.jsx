import styled from 'styled-components';
import { themeColor } from '../themes/colors';

export const StyledHeading = styled.h2`
    color: ${themeColor.darkShade};
    text-align: center;
    font-size: 2rem;
`;

export const StyledLink = styled.a`
    color: ${themeColor.darkShade};
    font-size: 1.2rem;
    text-decoration: none;
    display: block;
    text-align: center;
    :hover {
        cursor: pointer;
    }
`;

export const CardWrapper = styled.div`
    :hover {
        cursor: pointer;
    }
`;
