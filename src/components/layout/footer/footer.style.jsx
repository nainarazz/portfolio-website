import styled from 'styled-components';
import { themeColor } from '../../../themes/colors';

export const StyledFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: ${themeColor.mainBrand};
    background: linear-gradient(to right, ${themeColor.darkShade}, ${themeColor.mainBrand});
`;
