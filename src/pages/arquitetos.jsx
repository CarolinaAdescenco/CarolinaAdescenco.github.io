import * as React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { colors } from "../utils/colors"
import { data as util } from "../utils/data"

import Layout from "../components/layout"

import Img3 from "../assets/home/gd8-west-whales-2.jpeg"
import { Container } from "react-bootstrap"

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

const Arquitetos = () => {

    return (
        <Layout
            titlePage="Arquitetos"
            page={util.homeRoutes[3]}
            bg={Img3}
        >
            <Container>
                <AniButton>Teste</AniButton>
            </Container>
        </Layout>
    )
}

export default Arquitetos
