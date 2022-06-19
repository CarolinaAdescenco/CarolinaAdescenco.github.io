import * as React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import { colors } from "../utils/colors"
import { data as util } from "../utils/data"
import { fadeDown, fadeLeft, fadeRight, fadeUp } from "../utils/keyframes"
import Link from "../components/link"

import Img3 from "../assets/home/gd8-west-whales-2.jpeg"

const CContainer = styled(Container)`
    margin-top: 100px;

    @media (min-width: 992px) {
        margin-top: 0;
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
        allContentfulCases {
            edges {
                node {
                    title
                    slug
                    descricao1
                    descricao2
                }
            }
        }
    }
`

const Cases = ({ data }) => {
    const { edges } = data.allContentfulCases

    return (
        <Layout page={util.homeRoutes[2]} bg={Img3} margin="160px">
            <CContainer>
                <RowAnimated>
                    {edges.map(({ node }, i) => (
                        <Col className="col-12 col-lg-auto item" key={i}>
                            <Link to={`${node.slug}`}>
                                <LinkBody>
                                    <h3>{node.title}</h3>
                                    <h4>{node.descricao1}</h4>
                                    <h5>{node.descricao2}</h5>
                                </LinkBody>
                            </Link>
                        </Col>
                    ))}
                </RowAnimated>
            </CContainer>
        </Layout>
    )
}

export default Cases
