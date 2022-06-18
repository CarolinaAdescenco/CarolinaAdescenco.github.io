import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Container, Row, Col } from "react-bootstrap"
import { FiChevronsLeft } from "react-icons/fi"

import LogoIMG from "../../assets/gd8-incorporadora.png"

import { colors } from "../../utils/colors"

const HeaderWrapper = styled.header`
    display: flex;
    position: relative;
    z-index: 9999999;
    align-items: center;
    margin: 16px 0 0 0;

    .margin-right {
        margin-right: auto;
    }

    .card-button {
        margin: 16px 0 16px auto;
    }

    @media (min-width: 992px) {
        .card-button {
            margin: 0;
        }
    }

    img {
        max-width: 150px;
    }
`

const CardButton = styled.div`
    margin: 0 0 0 auto;
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
    transform: translateY(0);
    transition: 0.5s ease-in-out;
    width: 100%;
    background: ${colors.white};

    h1{
        font-size: 18px;
        letter-spacing: 1.5px;
        font-weight: 300;
        color: ${colors.dark};
        margin: 0;
    }

    span {
        margin-top: 8px;
    }

    @media (min-width: 992px) {
        max-width: 260px;
        padding: 26px 36px;
    }
`

const AniButton = styled(AniLink)`
    margin: 0 0 0 auto;
    padding: 21px;
    background: ${colors.dark};
    border-radius: 41px;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: fit-content;
    color: ${colors.white};
    transform: translateY(0);
    transition: 0.5s ease-in-out;
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 1.5px;

    svg {
        margin-right: 16px;
    }

    span {
        margin-top: 8px;
    }

    @media (min-width: 992px) {
        max-width: 260px;
        padding: 24px 28px;

        &:hover {
            color: ${colors.dark};
            background: ${colors.white};
        }
    }
`

const Header = ({ page }) => {
    const { title, subtitle } = page

    return (
        <HeaderWrapper>
            <Container>
                <Row className="align-items-center">
                    <Col className="col-6 col-lg-2 margin-right">
                        <AniLink to="/" fade duration={2}>
                            <img src={LogoIMG} alt="" />
                        </AniLink>
                    </Col>

                    <Col className="col-6 col-lg-2 ml-auto">
                        <AniButton to="/" fade duration={3}>
                            <FiChevronsLeft />
                            Inicio
                        </AniButton>
                    </Col>

                    {title && (
                        <Col className="col-6 col-lg-3 card-button">
                            <CardButton>
                                <h1>
                                    {title}
                                    {subtitle && (
                                        <>
                                            <br />
                                            <span>{subtitle}</span>
                                        </>
                                    )}
                                </h1>
                            </CardButton>
                        </Col>
                    )}
                </Row>
            </Container>
        </HeaderWrapper>
    )
}

export default Header
