import React from "react"
import styled from "styled-components"
import InputMask from "react-input-mask"

import { colors } from '../../utils/colors';

const Group = styled.div`
    display: flex;
    position: relative;
    padding-top: 10px;
    margin: 8px 0 16px 0;

    label {
        color: ${colors.transparentWhite2};
        position: absolute;
        top: 15px;
        transition: all 0.3s;
        font-size: 14px;
        text-transform: uppercase;
    }

    input {
        border: 0;
        padding: 0 0 0 70px;
        background-color: transparent;
        border-bottom: 2px solid ${colors.transparentWhite};
        font-size: 14px;
        line-height: 30px;
        width: 100%;

        color: ${colors.transparentWhite2};

        &:focus {
            outline: 0;
            border-bottom-color: ${colors.transparentWhite2};
        }
    }
`

const InputMaskComponent = styled(InputMask)`
    background: transparent;
    padding: 8px 0px;
    border: none;
    border-bottom: 1px solid ${colors.transparentWhite2};
    color: ${colors.transparentWhite2};
    width: 100%;

    transition: all 0.2s;

    &:focus {
        outline: none;
        border-bottom: 1px solid ${colors.transparentWhite2};
    }
`

const Input = ({ label, register, required, type }) => (
    <Group className="input">
        <input type={type} {...register(label, { required })} />
        <label>{label}</label>
    </Group>
)

const InputPhone = ({ mask, label, register, required }) => (
    <Group>
        <InputMaskComponent mask={mask} {...register(label, { required })} />
        <label>{label}</label>
    </Group>
)

export { Input, InputPhone }
