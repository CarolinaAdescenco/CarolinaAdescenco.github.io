import styled from 'styled-components';

import { Link as link } from 'gatsby';

import { colors } from '../../utils/colors';

export const FooterComponent = styled.footer`
    padding: 24px 0;
    color: ${colors.white};
`;

export const Hr = styled.hr`
    background-color: ${colors.white};
    margin-bottom: 36px;
`;

export const Link = styled(link)`
    cursor: pointer;
    display: flex;
    color: ${colors.white};
    text-decoration: none;
`;

export const Logos = styled.div`
    background: ${colors.white};
    border-radius: 8px;
    padding: 16px;

    display: flex;
    align-items: center;
    justify-content: center;


    img{
        margin: 0 8px;
        max-width: 150px;
    }
`;
