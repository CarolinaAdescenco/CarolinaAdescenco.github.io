import styled from 'styled-components';
import { Link as link } from 'gatsby';

import { Carousel } from 'react-bootstrap';

import { colors } from '../../utils/colors';

export const CarouselItem = styled(Carousel.Item)`
    height: 400px;
    background-color: ${colors.transparentBlack};

    img{
        mix-blend-mode: multiply;
    }

    @media(min-width: 992px){
        height: 450px;
    }
`;

export const Caption = styled(Carousel.Caption)`
    h3{
        color: ${colors.white};
    }

    p{
        margin: 0 0 16px 0;
    }
`;

export const Action = styled.div`
    position: relative;
    margin: 0 0 18px 0;
    cursor: pointer;

    svg{
        top: 5px;
        position: absolute;

        opacity: 0;
        visibility: hidden;

        transition: all .2s;

        width: 16px;


        transform: translate(2px);

    }

    &:hover{
        svg{
            visibility: visible;
            opacity: 1;

            transform: translateX(10px);
        }
    }
`;

export const Link = styled(link)`
    color: ${colors.white};
    text-decoration: none;
    margin: 0 0 16px 0;

    &:hover{
        color: ${colors.white};
    }
`;
