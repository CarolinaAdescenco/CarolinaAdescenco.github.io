import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Container } from "react-bootstrap"
import { FiChevronsLeft } from "react-icons/fi"

import LogoIMG from "../../assets/gd8-incorporadora.png"

import { colors } from "../../utils/colors"

const HeaderWrapper = styled.header`
    display: flex;
    position: relative;
    z-index: 9999999;
    align-items: center;

    .container {
        display: flex;
        align-items: center;
    }

    .flex-end {
        justify-content: flex-end;
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
    color: ${colors.white};
    transform: translateY(0);
    transition: 0.5s ease-in-out;
    -webkit-box-shadow: 6px 12px 25px -5px rgba(0, 0, 0, 0.67);
    box-shadow: 6px 12px 25px -5px rgba(0, 0, 0, 0.67);
    font-size: 18px;
    letter-spacing: 1.5px;
    width: 100%;

    font-weight: 300;
    color: ${colors.dark};
    background: ${colors.white};

    span {
        margin-top: 8px;
    }

    @media (min-width: 992px) {
        max-width: 260px;
        margin: 16px;
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
    -webkit-box-shadow: 6px 12px 25px -5px rgba(0, 0, 0, 0.67);
    box-shadow: 6px 12px 25px -5px rgba(0, 0, 0, 0.67);
    font-weight: 300;
    font-size: 18px;
    letter-spacing: 1.5px;

    svg {
        margin-right: 16px;
    }

    span {
        margin-top: 8px;
    }

    @media (min-width: 992px) {
        max-width: 260px;
        margin: 16px;
        padding: 26px 36px;

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
            <Container className="container">
                <AniLink to="/" fade duration={2}>
                    <img src={LogoIMG} alt="" />
                </AniLink>

                <div className="container flex-end">
                    <AniButton to="/" fade duration={2}>
                        <FiChevronsLeft />
                        Inicio
                    </AniButton>

                    {title && (
                        <CardButton>
                            {title}
                            {subtitle && (
                                <>
                                    <br />
                                    <span>{subtitle}</span>
                                </>
                            )}
                        </CardButton>
                    )}
                </div>
            </Container>
        </HeaderWrapper>
    )
}

export default Header
