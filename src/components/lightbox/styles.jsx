import styled from 'styled-components';
import { Modal as M } from 'react-bootstrap';

import { colors } from '../../utils/colors';

export const Card = styled.button`
    width: 300px;
    height: 400px;

    background-image: ${(props) => `url(${props.bg})`};
`;

export const Modal = styled(M)`
    position: relative;

    button{
        font-size: 36px;
        position: absolute;
        top: 50%;
        background: transparent;
        border: none;
        color: ${colors.transparentWhite2};

        &.prev{
            right: 0;
        }

        &.next{
            left: 0;
        }
    }
`;
