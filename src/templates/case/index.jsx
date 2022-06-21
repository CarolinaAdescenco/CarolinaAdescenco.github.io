import React from "react"
import styled from "styled-components"
import { Container as Cont, Row, Col } from "react-bootstrap"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import { colors } from "../../utils/colors"

import Layout from "../../components/layout"
import Lightbox from "../../components/lightbox"
import Link from "../../components/link"

const Container = styled(Cont)`
    margin: 100px auto;

    @media (min-width: 992px) {
        margin: 150px auto;
    }
`

const TitleWrapper = styled(Row)`
    align-items: center;
    justify-content: center;
    padding: 48px 0;
    margin: 140px 0 60px 0 !important;

    .box-titulo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 24px;

        h2 {
            font-weight: 100;
            text-transform: uppercase;
            color: ${colors.transparentWhite2};
            margin-bottom: 24px;
        }

        a {
            margin: 0;
        }
    }

    @media (min-width: 992px) {
        margin: 70px 0 60px 0 !important;

        .box-titulo {
            h2 {
                font-size: 48px;
                letter-spacing: 6px;
                margin-bottom: 36px;
            }
        }
    }
`

const Subtitulo = styled.h3`
    color: ${colors.white};
    font-weight: 300;
    margin-bottom: 24px;
    padding-left: 24px;
    position: relative;

    &:before {
        content: "";
        width: 5px;
        height: 100%;
        position: absolute;
        left: 0px;
        background-color: ${colors.transparentWhite2};
    }
`

const Wrapper = styled(Cont)`
    color: ${colors.white};
    margin: 30px 0 30px 0;

    @media (min-width: 992px) {
        margin: 80px 0 0 0;
    }
`

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    min-height: 300px;
`

const CasePost = content => {
    const {
        slug,
        title,
        endereco,
        fichaTecnica,
        description,
        background,
        plantas,
        galeria,
    } = content.pageContext

    const lightbox1 = plantas !== null ? plantas.map(planta => planta.url) : []
    const lightbox2 = galeria !== null ? galeria.map(gal => gal.url) : []

    const data = {
        title: title,
    }

    return (
        <Layout page={data} bg={background.url}>
            <Container>
                <TitleWrapper className="glass-effect">
                    <Col className="col-12 col-lg-5 box-titulo">
                        <h2>{title}</h2>
                        <Link to="/contato">Saber mais</Link>
                    </Col>

                    {fichaTecnica && (
                        <Col className="col-10 col-lg-5">
                            {renderRichText(fichaTecnica)}
                        </Col>
                    )}
                </TitleWrapper>

                <Wrapper>
                    {!!description && (
                        <Row className="justify-content-start mb-5">
                            <Col className="col-12 col-lg-10">
                                <Subtitulo>+ detalhes</Subtitulo>
                                {renderRichText(description)}
                            </Col>
                        </Row>
                    )}

                    {(plantas || galeria) && (
                        <Row className="justify-content-around mb-5">
                            {plantas && (
                                <Col className="col-12 col-lg-6">
                                    <Subtitulo>Plantas</Subtitulo>
                                    <Lightbox data={lightbox1} height="380px" />
                                </Col>
                            )}

                            {galeria && (
                                <Col className="col-12 col-lg-6 mt-5 mt-lg-0">
                                    <Subtitulo>Galeria de Imagens</Subtitulo>
                                    <Lightbox data={lightbox2} height="380px" />
                                </Col>
                            )}
                        </Row>
                    )}

                    {endereco?.lat && endereco?.lon && (
                        <Row className="justify-content-around mb-5">
                            <Col className="col-12">
                                <Subtitulo>Localização</Subtitulo>
                                <Iframe
                                    title={slug}
                                    scrolling="no"
                                    src={`https://maps.google.com/maps?q=${endereco.lat},${endereco.lon}&hl=pt-br&z=14&amp;&output=embed`}
                                />
                            </Col>
                        </Row>
                    )}
                </Wrapper>
            </Container>
        </Layout>
    )
}
export default CasePost
