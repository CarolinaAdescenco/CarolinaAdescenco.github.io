import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const ModalComponent = styled(Modal)`
    .modal-content{
        padding: 24px;
        border-radius: 0;
    }

    .modal-header, .modal-footer{
        border: none;
    }

    .btn{
        background: ${colors.transparentBlack};
        border-radius: 0;
        border: none;
        padding: 8px 16px;

        &:hover{
            background: ${colors.black};
        }
    }

`;
