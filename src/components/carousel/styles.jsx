import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

import { colors } from '../../utils/colors.json';

export const CarouselItem = styled(Carousel.Item)`
    height: 400px;
    background-color: ${colors['transparent-black']};

    img{
        mix-blend-mode: multiply;
    }


    @media(min-width: 992px){
        height: 600px;
    }
`;
