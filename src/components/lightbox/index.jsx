import React from "react"
import styled, { css } from "styled-components"
import { Modal as M } from "react-bootstrap"

import { colors } from "../../utils/colors"
import { useIcon, useInterval } from "../../utils/functions"

const Card = styled.img`
    width: 100%;
    display: ${props => (props.show ? "flex" : "none")};
    cursor: pointer;

    @media (min-width: 992px) {
        ${props => props.height && css`
            height: ${props.height};
        `}
    }

`

const DotColumn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 32px auto;

    @media (min-width: 992px) {
        margin: 16px auto;
    }
`

const DotButton = styled.button`
    border: none;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin: 0 16px 0 0;

    color: ${colors.white};
    font-weight: 200;

    background: ${props =>
        props.active ? colors.white : colors.transparentWhite};

    @media (min-width: 992px) {
        margin: 0 24px 0 0;
    }
`

const Modal = styled(M)`
    button {
        display: flex;
        align-items: center;
        font-size: 28px;
        padding: 10px;
        border: none;
        color: ${colors.transparentBlack};
        background: ${colors.transparentWhite2};

        position: absolute;
        top: 48%;

        &.prev {
            left: 40px;
        }

        &.next {
            right: 40px;
        }

        @media (min-width: 576px) {
            padding: 16px;

            &.prev {
                left: -40px;
            }

            &.next {
                right: -40px;
            }
        }
    }
`

const Lightbox = ({ data, height }) => {
    const [element, setElement] = React.useState(0)
    const [show, setShow] = React.useState(false)

    useInterval(() => {
        setElement(element + 1)

        if (element === data.length - 1) {
            setElement(0)
        }
    }, 5000)

    const prev = i => {
        if (i >= 0 && i <= data.length - 1) {
            setElement(element - 1)
        }

        if (i === 0) {
            setElement(data.length - 1)
        }
    }

    const next = i => {
        if (i !== data.length - 1) {
            return setElement(element + 1)
        }

        setElement(0)
    }

    return (
        <>
            {data.map((item, i) => (
                <Card
                    height={height}
                    key={i}
                    src={data[element]}
                    show={i === 0}
                    onClick={() => {
                        setShow(true)
                        setElement(i)
                    }}
                />
            ))}

            <DotColumn className="col-12">
                {data.map((item, index) => (
                    <DotButton
                        key={item}
                        type="button"
                        active={index === element}
                        onClick={() => setElement(index)}
                    />
                ))}
            </DotColumn>

            <Modal show={show} onHide={() => setShow(false)} centered>
                <button className="prev" onClick={() => prev(element)}>
                    {useIcon("prev")}
                </button>

                <img className="img-fluid" src={data[element]} alt="" />

                <button className="next" onClick={() => next(element)}>
                    {useIcon("next")}
                </button>
            </Modal>
        </>
    )
}

export default Lightbox
