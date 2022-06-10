/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from "react"
import styled, { keyframes } from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { bounce } from "react-animations"

import LogoIMG from "../assets/gd8-incorporadora-logo.png"
import { colors } from "../utils/colors"

import Building from "../assets/svg/building.jsx"
import Laurel from "../assets/svg/laurel.jsx"

import Img1 from "../assets/home/gd8-one-haus-piscina.jpeg"
import Img2 from "../assets/home/gd8-one-haus.jpeg"
import Img3 from "../assets/home/gd8-west-whales-2.jpeg"
import Img4 from "../assets/home/gd8-west-whales-3.jpeg"
import Img5 from "../assets/home/gd8-west-whales.jpeg"

import Contact from "../components/contact"

const images = [Img1, Img2, Img3, Img4, Img5]

const Logo = styled.aside`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;

    h2 {
        color: ${colors.white};
        font-weight: 100;
        text-transform: uppercase;

        letter-spacing: 14px;
        margin-left: 14px;
        font-size: 24px;
        margin-top: 18px;
    }

    img {
        opacity: 0.8;
        width: auto;
        max-width: 100%;
        background-color: ${colors.themeColor};
        padding: 16px;
    }

    @media (min-width: 992px) {
        width: 460px;

        h2 {
            letter-spacing: 24px;
            margin-left: 24px;
            font-size: 21px;
            margin-top: 18px;
        }
    }
`

const Background = styled.section`
    background-image: ${props => `url(${props.bg})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    background-blend-mode: multiply;
    background-color: ${colors.transparentBlack};

    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;

    transition: 0.5s ease-in-out;
`

const DotColumn = styled.div`
    display: flex;
    align-items: center;
    margin: 32px auto;
    justify-content: center;

    @media (min-width: 768px) {
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

    @media (min-width: 768px) {
        margin: 36px 24px 0 0;
    }
`

const AniButton = styled(AniLink)`
    display: block;
    padding: 16px 16px 16px 0;
    border-right: 1px solid ${colors.white};
    border-left: none;
    margin: 16px;
    color: ${colors.white};
    text-decoration: none;
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-weight: 100;
    transition: 0.5s all;

    position: relative;

    svg {
        fill: ${colors.white};
        stroke: ${colors.white};
        margin-right: 16px;
    }

    &:after {
        content: "";
        width: 70%;
        height: 1px;
        background: ${colors.white};
        position: absolute;
        top: 0;
        right: 0;
    }

    &:before {
        content: "";
        width: 65%;
        height: 1px;
        background: ${colors.white};
        position: absolute;
        bottom: 0;
        right: 0;
    }

    &:hover {
        color: ${colors.white};
        border-right: 1px solid ${colors.themeColor2};

        svg {
            fill: ${colors.themeColor2};
            stroke: ${colors.themeColor2};
        }

        &:after,
        &:before {
            background: ${colors.themeColor2};
        }
    }
`

const Index = () => {
    const [element, setElement] = React.useState(0)

    function useInterval(callback, delay) {
        const savedCallback = React.useRef()

        React.useEffect(() => {
            savedCallback.current = callback
        }, [callback])

        React.useEffect(() => {
            let id = setInterval(() => {
                savedCallback.current()
            }, delay)
            return () => clearInterval(id)
        }, [delay])
    }

    // useInterval(() => {
    //     setElement(element + 1)

    //     if (element === images.length - 1) {
    //         setElement(0)
    //     }
    // }, 3000)

    return (
        <Background bg={images[element]} className="h-100">
            <Contact />

            <Container>
                <Row className="justify-content-between">
                    <Col className="col-12 col-md-4">
                        <Logo>
                            <img src={LogoIMG} alt="logo" />
                            <h2>Incorporadora</h2>
                        </Logo>
                    </Col>

                    <Col className="col-12 col-md-6">
                        <AniButton
                            cover
                            direction="right"
                            duration={1.5}
                            to="/midia"
                            bg={colors.themeColor}
                        >
                            <Laurel width="60px" title="teste" /> Prêmios
                        </AniButton>

                        <AniButton
                            cover
                            direction="right"
                            duration={1.5}
                            to="/contato"
                            bg={colors.themeColor}
                        >
                            <Building width="100px" height="auto" /> Arquitetos
                        </AniButton>
                    </Col>
                </Row>

                <DotColumn className="col-12 col-md-1">
                    {images.map((item, index) => (
                        <DotButton
                            key={item}
                            type="button"
                            active={index === element}
                            onClick={() => setElement(index)}
                        />
                    ))}
                </DotColumn>
            </Container>
        </Background>
    )
}

export default Index
