import styled from 'styled-components';
import { Container as Cont } from 'react-bootstrap';

import { colors } from '../../utils/colors';

export const Figure = styled.figure`
    height: 400px;
    background-image: ${(props) => `url(${props.bgMobile})`};
    background-size: cover;
    display: flex;

    .box-principal{
        margin-top: 50px;
    }

    .box-titulo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1{
            margin-bottom: 24px;
        }
    }

    .box-black{
        background-color: ${colors.transparentBlack};
        border-radius: 3px;
        padding: 20px;

        margin-top: 90px;

        ul{
            margin: 0;
            padding: 0 0 0 30px;
            list-style: none;

            li{
                position: relative;
                list-style-type: none;
                padding-left: 2.5rem;
                margin-bottom: 0.5rem;

                &:before{
                    content: '';
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 3px;
                    width: 5px;
                    height: 11px;
                    border-width: 0 2px 2px 0;
                    border-style: solid;
                    border-color: ${colors.themeColor2};
                    transform-origin: bottom left;
                    transform: rotate(45deg);
                }
            }
        }

        p{
            font-family: 'Lato';
            font-weight: 300;
            margin-bottom: 4px;
            color: ${colors.white};
        }
    }

    @media(min-width: 992px){
        background-image: ${(props) => `url(${props.bgDesktop})`};
        height: 450px;

        .box-principal{
            margin-top: 100px;
        }

        .box-titulo{
            align-items: flex-start;
        }

        .box-black{
            margin-top: 0;
        }
    }

`;

export const Button = styled.button`
    border: none;
    border-radius: 0;
    width: 200px;
    padding: 16px 0;
    margin:  0 0 16px 0;

    font-size: 18px;
    color: ${colors.white};
    font-weight: 200;
    white-space: nowrap;

    background: ${colors.themeColor2};

    &:hover{
        background: ${colors.themeColor3};
    }
`;

export const Subtitulo = styled.h3`
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

export const Wrapper = styled(Cont)`
    margin-top: 220px;

    color: ${colors.white};

    @media(min-width: 992px){
        margin-top: 100px;
    }
`;

export const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
`;
