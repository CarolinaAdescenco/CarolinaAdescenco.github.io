import * as React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Container as Cont, Row, Col } from "react-bootstrap"

import { data as util } from "../utils/data"
import { colors } from "../utils/colors"
import { fadeDown, fadeLeft, fadeRight, fadeUp } from "../utils/keyframes"

import Layout from "../components/layout"
import Link from "../components/link"

import Img3 from "../assets/home/gd8-west-whales-2.jpeg"

const Container = styled(Cont)`
    margin: 300px auto 250px auto;

    @media (min-width: 992px) {
        margin: 200px auto;
    }
`

const RowAnimated = styled(Row)`
    .item {
        display: flex;
    }

    .item:nth-child(odd) {
        justify-content: flex-end;
        margin-right: auto;
        animation: 1.5s ${fadeRight};
        animation-delay: 1s;
    }

    .item:nth-child(even) {
        margin-left: auto;
        justify-content: flex-start;
        animation: 1.5s ${fadeLeft};
        animation-delay: 1s;
    }

    @media (min-width: 992px) {
        .item:nth-child(odd) {
            animation: 1.5s ${fadeDown};
            animation-delay: 1s;
            margin-top: 50px;
        }

        .item:nth-child(even) {
            animation: 1.5s ${fadeUp};
            animation-delay: 1s;
            margin-bottom: 40px;
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

const LinkBody = styled.div`
    h3 {
        font-weight: 100;
        text-transform: initial;
        font-size: 16px;

        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-bottom: 25px;
        padding-bottom: 25px;

        &:after {
            content: "";
            position: absolute;
            bottom: 0;
            width: 60%;
            height: 1px;
            background: ${colors.white};
        }
    }

    h4,
    h5 {
        font-weight: 100;
        text-transform: uppercase;
    }

    h5 {
        font-size: 16px;
    }
`

export const query = graphql`
    query {
        allContentfulArquitetos {
            edges {
                node {
                    nome
                    projeto
                    tipoProjeto
                    cases {
                        slug
                    }
                }
            }
        }
    }
`

const Arquitetos = ({ data }) => {
    const { edges } = data.allContentfulArquitetos

    return (
        <Layout page={util.routes[3]} bg={Img3} margin="190px">
            <Container>
                <RowAnimated>
                    {edges.map(({ node }, i) => {
                        return (
                            <Col className="col-12 col-lg-auto item" key={i}>
                                {node.cases ? (
                                    <Link to={`/cases/${node.cases[0].slug}`}>
                                        <LinkBody>
                                            <h3>{node.nome}</h3>
                                            <h4>{node.projeto}</h4>
                                            <h5>{node.tipoProjeto}</h5>
                                        </LinkBody>
                                    </Link>
                                ) : (
                                    <CardButton>
                                        <LinkBody>
                                            <h3>{node.nome}</h3>
                                            <h4>{node.projeto}</h4>
                                            <h5>{node.tipoProjeto}</h5>
                                        </LinkBody>
                                    </CardButton>
                                )}
                            </Col>
                        )
                    })}
                </RowAnimated>
            </Container>
        </Layout>
    )
}

export default Arquitetos
