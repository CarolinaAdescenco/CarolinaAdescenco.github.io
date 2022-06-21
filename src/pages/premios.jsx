import * as React from "react"
import { Container as Cont, Col, Row } from "react-bootstrap"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Lightbox from "../components/lightbox"

import { colors } from "../utils/colors"
import { data as util } from "../utils/data"
import { premios } from "../utils/premios"
import { useInterval } from "../utils/functions"

import ImgPremio from "../assets/premio-gd8-west-whales.jpeg"

const Figure = styled.figure`
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    background: ${colors.gray};
    margin: 0;

    img {
        mix-blend-mode: multiply;
    }

    figcaption {
        position: absolute;
        font-weight: 100;
        color: ${colors.white};
        text-shadow: 3px 3px 3px ${colors.black};
        font-size: 18px;
        margin: 0 0 48px 0;
    }

    @media (min-width: 768px) {
        align-items: center;

        figcaption {
            margin: 0;
            font-size: 32px;
        }
    }

    @media (min-width: 1200px) {
        figcaption {
            font-size: 48px;
        }
    }
`

const Content = styled.article`
    color: ${colors.white};

    h2,
    h4 {
        font-weight: 100;
        text-transform: uppercase;
    }

    h3 {
        font-weight: 100;
        margin-bottom: 36px;
    }

    .separator {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 36px;

        &:after {
            content: "";
            position: absolute;
            width: 50%;
            height: 1px;
            bottom: 0;
            margin: auto;
            background: ${colors.white};

            @media (min-width: 992px) {
                width: 1px;
                height: 60%;
                top: 0;
            }
        }
    }

    @media (min-width: 992px) {
        .separator {
            margin: 0;
        }
    }
`

const IndexCol = styled(Col)`
    z-index: -1;
    margin: 30px 0 120px 0;

    @media (min-width: 992px) {
        margin: 60px 0 120px 0;
    }
`

const Container = styled(Cont)`
    margin: 40px auto;

    @media (min-width: 992px) {
        margin: 60px auto;
    }
`

export const query = graphql`
    query {
        allContentfulRevistas {
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

const Premios = ({ data }) => {
    const { edges } = data.allContentfulRevistas
    const [images] = React.useState(edges.map(({ node }) => node.imagem.url))
    const [element, setElement] = React.useState(0)

    useInterval(() => {
        setElement(element + 1)

        if (element === images.length - 1) {
            setElement(0)
        }
    }, 5000)

    return (
        <Layout page={util.homeRoutes[1]} margin="60px">
            <Container>
                <Row className="align-items-start">
                    <Col className="col-12 col-lg-8">
                        <Figure>
                            <img
                                className="img-fluid"
                                src={ImgPremio}
                                alt="Prêmio Master Imobiliário GD8 - West Whales"
                                title="Prêmio Master Imobiliário GD8 - West Whales"
                            />

                            <figcaption>West Whales</figcaption>
                        </Figure>
                    </Col>

                    <Col className="col-12 col-lg-4 mt-5 mt-lg-0">
                        <Lightbox data={images} height="465px"/>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <IndexCol className="col-12">
                        <Content>
                            <h2>{premios.first.title}</h2>
                            <h3>{premios.first.subtitle}</h3>
                            <Row className="justify-content-between">
                                <Col className="col-12 col-lg-5 align-self-center">
                                    <h4>{premios.first.pt.title}</h4>
                                    <p>{premios.first.pt.paragraph}</p>
                                </Col>
                                <Col className="col-12 col-lg-2 separator"></Col>
                                <Col className="col-12 col-lg-5 align-self-center">
                                    <h4>{premios.first.en.title}</h4>
                                    <p>{premios.first.en.paragraph}</p>
                                </Col>
                            </Row>
                        </Content>
                    </IndexCol>
                </Row>
            </Container>
        </Layout>
    )
}

export default Premios
