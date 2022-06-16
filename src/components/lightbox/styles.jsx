import styled from 'styled-components';
import { Modal as M } from 'react-bootstrap';

import { colors } from '../../utils/colors';

export const Card = styled.img`
    width: 100%;
    display: ${(props) => (props.show ? 'flex' : 'none')};
    background-size: cover;
    cursor: pointer;
    border: none;
    outline: none;
`;

export const Modal = styled(M)`

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
