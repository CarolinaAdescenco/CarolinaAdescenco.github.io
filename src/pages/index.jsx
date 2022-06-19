/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from "react"
import styled, { keyframes } from "styled-components"
import { Container as Cont, Row, Col } from "react-bootstrap"
import { fadeInDown, fadeInLeft, fadeInRight, fadeInUp } from "react-animations"

import LogoIMG from "../assets/gd8-incorporadora-logo.png"
import { colors } from "../utils/colors"
import { data as util } from "../utils/data"

// import Img1 from "../assets/home/gd8-one-haus-piscina.jpeg"
// import Img2 from "../assets/home/gd8-one-haus.jpeg"
// import Img3 from "../assets/home/gd8-west-whales-2.jpeg"
// import Img4 from "../assets/home/gd8-west-whales-3.jpeg"
// import Img5 from "../assets/home/gd8-west-whales.jpeg"

import Contact from "../components/contact"
import Link from "../components/link"
import { useInterval } from "../utils/functions"
import { graphql } from "gatsby"

// const images = [Img1, Img2, Img3, Img4, Img5]

const fadeDown = keyframes`${fadeInDown}`
const fadeUp = keyframes`${fadeInUp}`
const fadeLeft = keyframes`${fadeInLeft}`
const fadeRight = keyframes`${fadeInRight}`

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

        letter-spacing: 6px;
        margin-left: 14px;
        font-size: 1.4rem;
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
            letter-spacing: 6px;
            margin-left: 12px;
            font-size: 18px;
            margin-top: 18px;
        }
    }
`

const Container = styled(Cont)`
    margin-top: 100px;
    margin-bottom: 100px;
`

const Background = styled.section`
    position: absolute;
    top: 0;
    background-image: ${props => `url(${props.bg})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    background-blend-mode: multiply;
    background-color: ${colors.transparentBlack};

    display: flex;
    align-items: center;

    height: initial;
    min-height: 100vh;

    transition: ease 2s;

    width: 100vw;
    min-width: -webkit-fill-available;
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
    flex-direction: column;
    justify-content: end;
    flex-wrap: wrap;

    a {
        margin: 18px;
        min-width: 260px;
        max-width: 260px;
    }

    a:nth-child(odd),
    div:nth-child(odd) {
        margin-right: auto;
        animation: 1.5s ${fadeRight};
        animation-delay: 1s;
    }

    a:nth-child(even),
    div:nth-child(even) {
        margin-left: auto;
        animation: 1.5s ${fadeLeft};
        animation-delay: 1s;
    }

    @media (min-width: 992px) {
        flex-direction: row;

        a:nth-child(odd),
        div:nth-child(odd) {
            margin-bottom: 45px;
            animation: 1.5s ${fadeDown};
            animation-delay: 1s;
        }

        a:nth-child(even),
        div:nth-child(even) {
            margin-top: 45px;
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
    font-size: 16px;
    letter-spacing: 1.5px;

    @media (max-width: 991) {
        width: fit-content;
    }

    span {
        margin-top: 8px;
    }

    @media (min-width: 992px) {
        width: 100%;
        max-width: 260px;
        margin: 16px;
        padding: 26px 36px;

        &:hover {
            color: ${colors.dark};
            transform: translateY(-2.5px);
            background: ${colors.white};
        }
    }
`

export const query = graphql`
    query {
        allContentfulBannerHome {
            edges {
                node {
                    imagem {
                        url
                    }
                    nome
                }
            }
        }
    }
`
const Index = ({ data }) => {

    // const { edges } = data.allContentfulBannerHome


    const [element, setElement] = React.useState(0)
    const { homeRoutes } = util

    const images = []

    // const teste = edges.map(({ node }) => node.imagem.url)
    // console.log(teste)



    useInterval(() => {
        setElement(element + 1)

        if (element === images.length - 1) {
            setElement(0)
        }
    }, 5000)

    return (
        <Background bg={images[element]}>
            <Contact />

            <Container>
                <Row className="justify-content-center justify-content-lg-between align-items-center">
                    <Col className="col-6 col-lg-3 p-0 mb-5">
                        <Logo>
                            <img src={LogoIMG} alt="logo" />
                            <h2>Incorporadora</h2>
                        </Logo>
                    </Col>

                    <Col className="col-12 col-lg-6">
                        <RowAnimated>
                            {homeRoutes.map((item, i) =>
                                item.path ? (
                                    <Link key={i} to={item?.path}>
                                        {item.title}
                                        {item.subtitle && (
                                            <>
                                                <br />
                                                <span>{item.subtitle}</span>
                                            </>
                                        )}
                                    </Link>
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
