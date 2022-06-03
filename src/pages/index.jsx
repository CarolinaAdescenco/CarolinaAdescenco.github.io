/* eslint-disable react/jsx-no-comment-textnodes */
import * as React from "react"
import styled, { keyframes } from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { bounce } from "react-animations"

import LogoIMG from "../assets/gd8-incorporadora-logo.png"
import { colors } from "../utils/colors"
import Layout from "../components/layout/index"

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
    background-image: ${props => `url(${props.bgMobile})`};
`

const Index = () => {
    return (
        <Layout>
            <Background className="h-100">
                <Container>
                    <Logo>
                        <img src={LogoIMG} alt="logo" />
                        <h2>Incorporadora</h2>
                    </Logo>
                </Container>
            </Background>
        </Layout>
    )
}

export default Index
