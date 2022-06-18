import React from "react"
import { graphql } from "gatsby"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2"
import styled, { css } from "styled-components"

import {
    SERVICE_KEY,
    PUBLIC_KEY,
    CLIENTE_TEMPLATE_KEY,
    CORRETOR_TEMPLATE_KEY
} from "gatsby-env-variables"

import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import { ImFacebook, ImTwitter, ImWhatsapp } from "react-icons/im"

import { Container, Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import { Button } from "../components/layout/styles"

import { Input, InputPhone, Select } from "../components/form"
import { colors } from "../utils/colors"
import { data as util } from "../utils/data"
import LoadSnake from "../components/loader"

import CacaFome from "../assets/gd8-caca-fome.png"
import Img3 from "../assets/home/gd8-west-whales-2.jpeg"

export const query = graphql`
    query {
        allContentfulLancamentos {
            edges {
                node {
                    title
                }
            }
        }
    }
`

const Footer = styled.footer`
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

const FormOption = styled.button`
    color: ${colors.white};
    background: ${colors.transparentWhite};
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 16px 0 0;
    cursor: pointer;
    padding: 0 10px;
    transition: all 0.3s ease;
    border: none;
    font-weight: 100;
    text-transform: uppercase;
    letter-spacing: 2px;

    span {
        height: 20px;
        width: 20px;
        background: #d9d9d9;
        border-radius: 50%;
        position: relative;

        &:before {
            position: absolute;
            content: "";
            top: 4px;
            left: 4px;
            width: 12px;
            height: 12px;
            background: ${colors.dark};
            border-radius: 50%;
            opacity: 0;
            transform: scale(1.5);
            transition: all 0.3s ease;
        }
    }

    ${props =>
        props.checked &&
        css`
            background: ${colors.dark};

            span {
                background: #fff;

                &:before {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        `}
`

const WrapperOption = styled.div`
    display: inline-flex;
    height: 60px;
    width: 400px;
    align-items: center;
    justify-content: space-evenly;

    margin: 150px 0 0 0;

    @media (min-width: 992px) {
        margin: 0;
    }
`

const FormWrapper = styled.form`
    background: rgba(30, 28, 28, 0.79);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);

    padding: 36px;
`

const CustomRow = styled(Row)`
    margin: 0 0 450px 0;
    justify-content: center;

    @media (min-width: 992px) {
        margin: 0 0 200px 0;
    }
`

const Contato = ({ data }) => {
    const { register, handleSubmit } = useForm()
    const { edges } = data.allContentfulLancamentos
    const [loading, setLoading] = React.useState(false)
    const [projetos] = React.useState(edges.map(({ node }) => node.title))

    const [cliente, setCliente] = React.useState(true)

    function useIcon(name) {
        switch (name) {
            case "whatsapp":
                return <ImWhatsapp />
            case "facebook":
                return <ImFacebook />
            case "instagram":
                return <AiOutlineInstagram />
            case "twitter":
                return <ImTwitter />
            case "youtube":
                return <AiOutlineYoutube />
            default:
                return <></>
        }
    }

    const onSubmit = formData => {
        setLoading(true)
        if(cliente){
            emailjs.send(SERVICE_KEY, CLIENTE_TEMPLATE_KEY, formData, PUBLIC_KEY).then(
                () => {
                    setLoading(false)
                    Swal.fire(
                        "Agradecemos seu contato!",
                        "Em breve daremos um retorno!",
                        "success"
                    )
                },
                () => {
                    setLoading(false)
                    Swal.fire(
                        "Ops! Ocorreu um erro.",
                        "Tente enviar seu e-mail novamente mais tarde!",
                        "error"
                    )
                }
            )
        } else {
            emailjs.send(SERVICE_KEY, CORRETOR_TEMPLATE_KEY, formData, PUBLIC_KEY).then(
                () => {
                    setLoading(false)
                    Swal.fire(
                        "Agradecemos seu contato!",
                        "Em breve daremos um retorno!",
                        "success"
                    )
                },
                () => {
                    setLoading(false)
                    Swal.fire(
                        "Ops! Ocorreu um erro.",
                        "Tente enviar seu e-mail novamente mais tarde!",
                        "error"
                    )
                }
            )
        }
    }

    const page = {
        title: "Contato",
    }

    return (
        <Layout page={page} bg={Img3} margin="160px">
            <CustomRow>
                <Col className="col-12 col-lg-8">
                    <WrapperOption>
                        <FormOption
                            checked={cliente}
                            type="button"
                            onClick={() => setCliente(true)}
                        >
                            <span></span> Cliente
                        </FormOption>
                        <FormOption
                            checked={!cliente}
                            type="button"
                            onClick={() => setCliente(false)}
                        >
                            <span></span> Corretor
                        </FormOption>
                    </WrapperOption>

                    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            type="text"
                            label="Nome"
                            register={register}
                            required
                        />

                        <Input
                            type="email"
                            label="E-mail"
                            register={register}
                            required
                        />

                        <InputPhone
                            mask="(99) 99999-9999"
                            label="Celular"
                            register={register}
                            required
                        />

                        <Select
                            label="Projeto"
                            register={register}
                            required
                            values={projetos}
                        />

                        <Button type="submit">
                            {loading ? <LoadSnake /> : "Enviar"}
                        </Button>
                    </FormWrapper>
                </Col>
            </CustomRow>

            <Footer>
                <Container>
                    <Row>
                        <Col className="col-12 col-lg-8">
                            {util.adress.map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}

                            <a href={`tel:${util.phone.link}`}>
                                Tel: {util.phone.show}
                            </a>
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
            </Footer>
        </Layout>
    )
}

export default Contato

