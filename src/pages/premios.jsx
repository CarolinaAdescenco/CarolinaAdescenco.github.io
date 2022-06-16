import * as React from "react"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"

import Layout from "../components/layout"

import { midia } from "../utils/midia"

import { colors } from "../utils/colors"
import { data as util } from "../utils/data"

import ImgPremio from "../assets/premio-gd8-west-whales.jpeg"
import Img1 from "../assets/revistas/gd8-revista-ad-best-of-maisons.png"
import Img2 from "../assets/revistas/gd8-revista-arquitectura-y-diseno.png"
import Img3 from "../assets/revistas/gd8-revista-bamboo.png"
import Img4 from "../assets/revistas/gd8-revista-sommer-brise.png"
import Lightbox from "../components/lightbox"

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
    margin: 80px 0 120px 0;
`

const Premios = () => {
    const [element, setElement] = React.useState(0)

    const images = [Img1, Img2, Img3, Img4]

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
    }, 5000)

    return (
        <Layout titlePage="Prêmios" page={util.homeRoutes[1]} margin="60px">
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
                    <Lightbox data={images} />
                </Col>
            </Row>
            <Row className="mt-2">
                <IndexCol className="col-12">
                    <Content>
                        <h2>{midia.first.title}</h2>
                        <h3>{midia.first.subtitle}</h3>
                        <Row className="justify-content-between">
                            <Col className="col-12 col-lg-5 align-self-center">
                                <h4>{midia.first.pt.title}</h4>
                                <p>{midia.first.pt.paragraph}</p>
                            </Col>
                            <Col className="col-12 col-lg-2 separator"></Col>
                            <Col className="col-12 col-lg-5 align-self-center">
                                <h4>{midia.first.en.title}</h4>
                                <p>{midia.first.en.paragraph}</p>
                            </Col>
                        </Row>
                    </Content>
                </IndexCol>
            </Row>
        </Layout>
    )
}

export default Premios
