import React from "react"
import styled from "styled-components"
import { Modal as M } from 'react-bootstrap';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"

import { colors } from "../../utils/colors"

const Card = styled.img`
    width: 100%;
    height: 600px;
    display: ${props => (props.show ? "flex" : "none")};
    background-size: cover;
    cursor: pointer;
    border: none;
    outline: none;

    @media(min-width: 992px){
        height: 465px;
    }
`

const Modal = styled(M)`
    button {
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

        &.next {
            right: 50px;
        }

        &.prev {
            left: 50px;
        }

        @media (min-width: 576px) {
            padding: 20px;

            &.next {
                right: -50px;
            }

            &.prev {
                left: -50px;
            }
        }
    }
`

const DotColumn = styled.div`
    display: flex;
    align-items: center;
    margin: 32px auto;
    justify-content: center;

    @media (min-width: 992px) {
        flex-direction: row;
        margin: auto;
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
    white-space: nowrap;

    background: ${props =>
        props.active ? colors.white : colors.transparentWhite};

    @media (min-width: 992px) {
        margin: 0 24px 0 0;
    }
`

const Lightbox = ({ data }) => {
    const [element, setElement] = React.useState(0)
    const [show, setShow] = React.useState(false)

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
            setElement(element + 1)
        } else {
            setElement(0)
        }
    }

    function useInterval(callback, delay) {
        const savedCallback = React.useRef()

        React.useEffect(() => {
            savedCallback.current = callback
        }, [callback])

        React.useEffect(() => {
            const id = setInterval(() => {
                savedCallback.current()
            }, delay)
            return () => clearInterval(id)
        }, [delay])
    }

    useInterval(() => {
        setElement(element + 1)

        if (element === data.length - 1) {
            setElement(0)
        }
    }, 5000)

    return (
        <>
            {data.map((item, i) => (
                <Card
                    show={i === 0}
                    key={i}
                    bg={data[element]}
                    src={data[element]}
                    onClick={() => {
                        setShow(true)
                        setElement(i)
                    }}
                />
            ))}

            <DotColumn className="col-12 mt-5 d-flex">
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
                <button
                    className="next"
                    type="button"
                    onClick={() => next(element)}
                >
                    <BsChevronRight />
                </button>

                <img className="img-fluid" src={data[element]} alt="" />

                <button
                    className="prev"
                    type="button"
                    onClick={() => prev(element)}
                >
                    <BsChevronLeft />
                </button>
            </Modal>
        </>
    )
}

export default Lightbox
