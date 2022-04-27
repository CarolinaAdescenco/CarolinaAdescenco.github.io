import styled from 'styled-components';
import InputMask from 'react-input-mask';

import { colors } from '../../utils/colors';

export const Group = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    &.checkbox-group{
        align-items: center ;
        flex-direction: row !important;

        label{
            margin: 0 0 0 16px;
            order: 2;
        }
    }
`;

export const LabelComponent = styled.label`
    color: ${colors.white};
    font-weight: 300;
    font-size: 16px;
`;

export const InputMaskComponent = styled(InputMask)`
    background: transparent;
    padding: 8px 0px;
    border: none;
    border-bottom: 1px solid ${colors.transparentWhite};
    color: ${colors.white};
    width: 100%;

    transition: all .2s;

    &:focus{
        outline: none;
        border-bottom: 1px solid ${colors.white};
    }
`;

export const InputComponent = styled.input`
    background: transparent;
    padding: 8px 0px;
    border: none;
    border-bottom: 1px solid ${colors.transparentWhite};
    color: ${colors.white};
    width: 100%;

    transition: all .2s;

    &:focus{
        outline: none;
        border-bottom: 1px solid ${colors.white};
    }

    &[type="checkbox"]{
        width: auto;
    }
`;

export const SelectComponent = styled.select`
    background: transparent;
    padding: 8px 0px;
    border: none;
    border-bottom: 1px solid ${colors.transparentWhite};
    color: ${colors.white};
    width: 100%;

    transition: all .2s;

    &:focus{
        outline: none;
        border-bottom: 1px solid ${colors.white};
    }
`;
