import styled from 'styled-components';
import { Modal as M } from 'react-bootstrap';

import { colors } from '../../utils/colors';

export const Card = styled.button`
    width: 100%;
    height: 400px;
    display: ${(props) => (props.show ? 'flex' : 'none')};
    background-image: ${(props) => `url(${props.bg})`};
    background-size: cover;

    border: none;
    outline: none;
`;

export const Modal = styled(M)`
    position: relative;

    button{
        font-size: 36px;
        position: absolute;
        top: 48%;
        background: transparent;
        border: none;
        color: ${colors.transparentWhite2};

        padding: 10px;

        display: flex;
        align-items: center;

        color: ${colors.transparentBlack};
        background: ${colors.transparentWhite2};

        &.next{
            right: 50px;
        }

        &.prev{
            left: 50px;
        }

        @media(min-width: 576px){
            padding: 20px;

            &.next{
                right: -50px;
            }

            &.prev{
                left: -50px;
            }
        }
    }
`;
