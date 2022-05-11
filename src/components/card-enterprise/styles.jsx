import styled from 'styled-components';

import { Link } from 'gatsby';
import { Col } from 'react-bootstrap';
import { RiSeparator } from 'react-icons/ri';

import { colors } from '../../utils/colors';

export const Card = styled(Link)`
    margin: 16px 0 !important;
    text-decoration: none;

    @media(min-width: 992px){
        margin: 48px 0 !important;
    }
`;

export const FloatCol = styled(Col)`
    position: relative;
`;

export const Aside = styled.aside`
    position: inherit;

    text-decoration: none;
    color: ${colors.black};
    background-color: ${colors.transparentWhite2};

    padding: 24px;
    border-radius: 2px;

    display: flex;
    flex-direction: column;

    -webkit-box-shadow: 6px 12px 25px -5px rgba(0,0,0,0.67);
    box-shadow: 6px 12px 25px -5px rgba(0,0,0,0.67);

    transition: .2s all;

    &:hover{
        background: ${colors.white};
        transform: translateY(-5px);

    }

    .title{
        color: ${colors.black};
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 700;
    }


    @media(min-width: 992px){
        left: -36px;
        padding: 36px;

        .title{
            margin: 0 0 0 36px;
        }
    }
`;

export const AsideContent = styled.div`
   text-align: center;
   margin: 36px 0 36px 0;

    p{
        font-size: 18px;
        margin: 0 0 8px 0;
        color: ${colors.black};
    }
`;

export const Action = styled.span`
    margin: 0 0 18px 0;
    cursor: pointer;

    position: absolute;
    bottom: 0;
    right: 48px;


    svg{
        width: 16px;

        position: absolute;
        top: 5px;

        transition: all .2s;
        transform: translate(2px);

    }

    &:hover{
        svg{
            transform: translateX(10px);
        }
    }
`;

export const Separator = styled(RiSeparator)`
    margin: 0 8px;
`;
