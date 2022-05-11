import { Col, Container as Cont } from 'react-bootstrap';
import styled from 'styled-components';

import { colors } from '../../utils/colors';

export const Container = styled(Cont)`
    margin: 50px auto;
`;

export const TitlePage = styled.h1`
    color: ${colors.white};
    font-weight: 300;
    margin-bottom: 24px;
    padding-left: 24px;
    position: relative;

    &:before{
        content: "";
        width: 5px;
        height: 100%;
        position: absolute;
        left: 0px;
        background-color: ${colors.themeColor2};
    }
`;

export const Subtitle = styled.h2`
    color: ${colors.white};
    font-weight: 300;
    margin-bottom: 24px;
    padding-left: 24px !important;
    position: relative;

    &:before{
        content: "";
        width: 5px;
        height: 100%;
        position: absolute;
        left: 0px;
        background-color: ${colors.themeColor3};
    }
`;

export const Subcontent = styled.div`
    margin-left: 26px;
`;

export const BackgroundImage = styled.div`
    height: 300px;
    background-size: cover;

    @media(min-width: 768px){
        height: 500px;
    }
`;

export const Button = styled.button`
    border: none;
    border-radius: 0;
    width: 100%;
    padding: 16px 0;
    margin:  0 0 16px 0;

    color: ${colors.white};
    font-weight: 200;
    white-space: nowrap;

    background: ${(props) => (props.active ? colors.themeColor2 : colors.transparentBlack)};
`;

export const DotColumn = styled(Col)`
    display: flex;
    align-items: center;
    margin: 32px 0;

    @media(min-width: 768px){
        flex-direction: column;
        margin: 0;
    }
`;

export const DotButton = styled.button`
    border: none;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin: 0 16px 0 0;

    color: ${colors.white};
    font-weight: 200;
    white-space: nowrap;

    background: ${(props) => (props.active ? colors.transparentWhite2 : colors.transparentWhite)};

    @media(min-width: 768px){
        margin: 0px 0px 16px 0;
    }
`;

export const Aside = styled.a`
    color: ${colors.white};

    p{
        font-weight: 200;
        margin: 0 0 8px 0;
        font-size: 18px;
    }
`;

export const Hr = styled.hr`
    background-color: ${colors.white};
    margin-bottom: 36px;
`;

export const Figure = styled.figure`
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    background: ${colors.gray};

    img{
        mix-blend-mode: multiply;
    }

    figcaption{
        position: absolute;
        font-weight: 700;
        color: ${colors.white};
        text-shadow: 3px 3px 3px ${colors.black};
        font-size: 18px;
        margin: 0 0 48px 0;
    }

    @media(min-width: 768px){
        align-items: center;

        figcaption{
            margin: 0;
            font-size: 32px;
        }
    }

    @media(min-width: 1200px){
        figcaption{
            font-size: 48px;
        }
    }
`;

export const WhatsAppButton = styled.a`
    position: fixed;
    right: 15px;
    bottom: 15px;

    width: 48px;
    height: 48px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${colors.white};
    font-size: 26px;
    background-color: ${colors.green};
    -webkit-box-shadow: 6px 12px 25px -5px rgba(0,0,0,0.67);
    box-shadow: 6px 12px 25px -5px rgba(0,0,0,0.67);
`;

export const Iframe = styled.iframe`
    width: 100%;
    height: 100%;

    @media(min-width: 992px){
        min-height: 300px;
    }
`;
