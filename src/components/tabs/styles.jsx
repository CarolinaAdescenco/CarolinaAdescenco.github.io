import styled from 'styled-components';

import { colors } from '../../utils/colors';

export const Button = styled.button`
    border: none;
    border-radius: 0;

    font-weight: 200;

    color: ${colors.white};
    margin: 8px 8px 8px 0;
    padding: 16px 32px;

    color: ${(props) => (props.active ? colors.black : colors.white)};
    background: ${(props) => (props.active ? colors.transparentWhite2 : colors.transparentBlack)};
`;

export const Aside = styled.aside`
    color: ${colors.white};
    margin: 16px 0;

    p{
        font-weight: 200;
        margin: 0 0 8px 0;
    }
`;
