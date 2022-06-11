/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from "react"
import styled, { keyframes } from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { fadeInDown, fadeInUp } from "react-animations"

import LogoIMG from "../assets/gd8-incorporadora-logo.png"
import { colors } from "../utils/colors"
import { data as dataUtils } from "../utils/data"

import Img1 from "../assets/home/gd8-one-haus-piscina.jpeg"
import Img2 from "../assets/home/gd8-one-haus.jpeg"
import Img3 from "../assets/home/gd8-west-whales-2.jpeg"
import Img4 from "../assets/home/gd8-west-whales-3.jpeg"
import Img5 from "../assets/home/gd8-west-whales.jpeg"

import Contact from "../components/contact"

const images = [Img1, Img2, Img3, Img4, Img5]

const fadeDown = keyframes`${fadeInDown}`
const fadeUp = keyframes`${fadeInUp}`

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
        width: 100%;

        h2 {
            letter-spacing: 16px;
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

    display: flex;
    align-items: center;

    transition: 0.5s ease-in-out;

    .row-principal {
        margin: 230px 0 80px 0;
    }

    @media (min-width: 992px) {
        height: 100vh;
        width: 100vw;

        .row-principal {
            margin: 0;
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

const RowAnimated = styled.div`
    display: flex;
    justify-content: end;
    flex-wrap: wrap;

    @media (min-width: 992px) {
        a:nth-child(odd),
        div:nth-child(odd) {
            margin-bottom: 60px;
            animation: 1.5s ${fadeDown};
            animation-delay: 1s;
        }

        a:nth-child(even),
        div:nth-child(even) {
            margin-top: 60px;
            animation: 1.5s ${fadeUp};
            animation-delay: 1s;
        }
    }
`

const CardButton = styled.div`
    margin: 16px;
    padding: 21px;
    background: ${colors.dark};
    border-radius: 12px;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: fit-content;
    color: ${colors.white};
    transform: translateY(0);
    transition: 0.5s ease-in-out;
    -webkit-box-shadow: 6px 12px 25px -5px rgba(0, 0, 0, 0.67);
    box-shadow: 6px 12px 25px -5px rgba(0, 0, 0, 0.67);
    font-weight: 100;
    font-size: 18px;
    letter-spacing: 1.5px;
    width: 100%;

    span {
        margin-top: 8px;
    }

    @media (min-width: 992px) {
        max-width: 260px;
        margin: 16px;
        padding: 26px 36px;

        &:hover {
            font-weight: 300;
            color: ${colors.dark};
            transform: translateY(-2.5px);
            background: ${colors.white};
        }
    }
`

const AniButton = styled(AniLink)`
    margin: 16px;
    padding: 21px;
    background: ${colors.dark};
    border-radius: 12px;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: fit-content;
    color: ${colors.white};
    transform: translateY(0);
    transition: 0.5s ease-in-out;
    -webkit-box-shadow: 6px 12px 25px -5px rgba(0, 0, 0, 0.67);
    box-shadow: 6px 12px 25px -5px rgba(0, 0, 0, 0.67);
    font-weight: 100;
    font-size: 18px;
    letter-spacing: 1.5px;
    width: 100%;

    span {
        margin-top: 8px;
    }

    @media (min-width: 992px) {
        max-width: 260px;
        margin: 16px;
        padding: 26px 36px;

        &:hover {
            color: ${colors.dark};
            font-weight: 300;
            transform: translateY(-2.5px);
            background: ${colors.white};
        }
    }
`

const Index = () => {
    const [element, setElement] = React.useState(0)
    const { homeRoutes } = dataUtils

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

    useInterval(() => {
        setElement(element + 1)

        if (element === images.length - 1) {
            setElement(0)
        }
    }, 3000)

    return (
        <Background bg={images[element]}>
            <Contact />

            <Container>
                <Row className="justify-content-between align-items-center mt-5 row-principal">
                    <Col className="col-12 col-lg-4 p-0 mb-5">
                        <Logo>
                            <img src={LogoIMG} alt="logo" />
                            <h2>Incorporadora</h2>
                        </Logo>
                    </Col>

                    <Col className="col-12 col-lg-8">
                        <RowAnimated>
                            {homeRoutes.map((item, i) =>
                                item.path ? (
                                    <AniButton
                                        key={i}
                                        cover
                                        direction="right"
                                        duration={1.5}
                                        to={item?.path}
                                        bg={colors.themeColor}
                                    >
                                        {item.title}
                                        {item.subtitle && (
                                            <>
                                                <br />
                                                <span>{item.subtitle}</span>
                                            </>
                                        )}
                                    </AniButton>
                                ) : (
                                    <CardButton key={i}>
                                        {item.title}
                                        {item.subtitle && (
                                            <>
                                                <br />
                                                <span>{item.subtitle}</span>
                                            </>
                                        )}
                                    </CardButton>
                                )
                            )}
                        </RowAnimated>
                    </Col>

                    <DotColumn className="col-12 mt-5 d-none d-lg-flex">
                        {images.map((item, index) => (
                            <DotButton
                                key={item}
                                type="button"
                                active={index === element}
                                onClick={() => setElement(index)}
                            />
                        ))}
                    </DotColumn>
                </Row>
            </Container>
        </Background>
    )
}

export default Index
