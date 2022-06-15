import * as React from "react"
import styled, { keyframes } from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { fadeInDown, fadeInUp } from "react-animations"

import { data as util } from "../utils/data"

import Layout from "../components/layout"
import Link from "../components/aniLink"

import Img3 from "../assets/home/gd8-west-whales-2.jpeg"
import { colors } from "../utils/colors"

const fadeDown = keyframes`${fadeInDown}`
const fadeUp = keyframes`${fadeInUp}`

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

const RowAnimated = styled(Row)`
    @media (min-width: 992px) {
        .item:nth-child(odd) {
            animation: 1.5s ${fadeDown};
            animation-delay: 1s;
            margin-top: 100px;
        }

        .item:nth-child(even){
            animation: 1.5s ${fadeUp};
            animation-delay: 1s;
        }
    }
`

const arq = [
    {
        path: "/",
        title: "Varabyeu Partners, Miami &amp; Europe",
        project: "One Haus",
        type: "[Arquitetura]",
    },
    {
        path: "/",
        title: "Artur Casas",
        project: "West Whales",
        type: "[Arquitetura]",
    },
    {
        path: "/",
        title: "Jacobsen Arquitetura",
        project: "One Haus",
        type: "[Arquitetura]",
    },
    {
        path: "/",
        title: "Marcio Kogan",
        project: "Casa",
        type: "[Arquitetura]",
    },
    {
        path: "/",
        title: "Dado Castello Branco",
        project: "Casa Sartini",
        type: "[Interiores]",
    },
    {
        path: "/",
        title: "Debora Aguiar",
        project: "One Haus",
        type: "[Interiores]",
    },
]

const Arquitetos = () => {
    return (
        <Layout titlePage="Arquitetos" page={util.homeRoutes[3]} bg={Img3}>
            <Container>
                <RowAnimated>
                    {arq.map(arq => (
                        <Col className="item">
                            <Link to={arq.path}>
                                <LinkBody>
                                    <h3>{arq.title}</h3>
                                    <h4>{arq.project}</h4>
                                    <h5>{arq.type}</h5>
                                </LinkBody>
                            </Link>
                        </Col>
                    ))}
                </RowAnimated>
            </Container>
        </Layout>
    )
}

export default Arquitetos
