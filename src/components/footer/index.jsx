import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

import { colors } from "../../utils/colors"
import { data as util } from "../../utils/data"
import { useIcon } from "../../utils/functions"

import CacaFome from "../../assets/gd8-caca-fome.png"

const FooterWrapper = styled.footer`
    padding: 36px 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${colors.dark};

    a {
        color: ${colors.white};
        font-weight: 200;
        margin: 0 0 8px 0;
        font-size: 18px;

        text-decoration: none;

        &:hover {
            color: ${colors.white};
        }
    }

    .social {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 36px 0;

        a {
            color: ${colors.white};
            font-size: 21px;
            margin: 0 8px;

            transition: all 0.2s;

            &:hover {
                color: ${colors.white};
                transform: translateY(-1px);
            }
        }

        @media (min-width: 992px) {
            justify-content: flex-end;
            margin: 0 0 24px 0;
        }
    }

    .caca-fome {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 70px;

        img {
            max-width: 100px;
            margin-right: 16px;
        }

        span {
            font-weight: bold;
            text-transform: uppercase;
            color: #58bec2;
        }

        @media (min-width: 992px) {
            justify-content: flex-end;
            margin-bottom: 35px;
        }
    }
`

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <Row>
                    <Col className="col-12 col-lg-8">
                        {util.adress.map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}

                        <p>
                            <a href={`tel:${util.phone.link}`}>
                                Tel: {util.phone.show}
                            </a>
                        </p>

                        <p>
                            <a href={`tel:${util.cellphone.link}`}>
                                Tel: {util.cellphone.show}
                            </a>
                        </p>
                    </Col>
                    <Col className="col-12 col-lg-4">
                        <div className="social">
                            {util.social.map((midia, i) => (
                                <a key={i} href={midia.path} target="_blank">
                                    {useIcon(midia.name)}
                                </a>
                            ))}
                        </div>

                        <div className="caca-fome">
                            <img src={CacaFome} alt="" />
                            <span>Caça-Fome</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </FooterWrapper>
    )
}

export default Footer
