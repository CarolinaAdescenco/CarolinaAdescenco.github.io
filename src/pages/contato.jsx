import React from "react"
import { graphql } from "gatsby"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2"
import styled, { css } from "styled-components"

import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import { ImFacebook, ImTwitter, ImWhatsapp } from "react-icons/im"

import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import { Button } from "../components/layout/styles"

import { Input, InputPhone, Select } from "../components/form"
import { colors } from "../utils/colors"
import { data as dataUtils } from "../utils/data"
import LoadSnake from "../components/loader"

const serviceKey = "service_atzby68"
const templateKey = "template_5e9tnrl"
const publicKey = "tMsyd6U9JbmASLFek"

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

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;

    background: ${colors.themeColor};

    @media (min-width: 992px) {
        width: 40%;
        height: 100vh;
    }
`

const List = styled.ul`
    list-style-type: none;
    padding: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 36px;

    a {
        font-size: 26px;
        margin: 0 8px;
        color: ${colors.white};

        &:hover {
            color: ${colors.white};
        }
    }
`

const InfoCol = styled(Col)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media (min-width: 992px) {
        max-width: 40%;
    }
`

const FormOption = styled.button `
    background: #fff;
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
            background: #0069d9;
            border-radius: 50%;
            opacity: 0;
            transform: scale(1.5);
            transition: all 0.3s ease;
        }
    }

    ${props => props.checked && css`
        color: ${colors.white};
        background: ${colors.themeColor2};

        span {
            background: #fff;

            &:before{
                opacity: 1;
                transform: scale(1);
            }
        }
    `}
`

const Wrapper = styled.div`
    display: inline-flex;
    height: 75px;
    width: 400px;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
`

const FormWrapper = styled.form`
    background: rgba(30, 28, 28, 0.79);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);

    padding: 36px;
`

const Contato = ({ data }) => {
    const { register, handleSubmit } = useForm()
    const { edges } = data.allContentfulLancamentos
    const [loading, setLoading] = React.useState(false)
    const [projetos] = React.useState(edges.map(({ node }) => node.title))

    const [cliente, setCliente] = React.useState(true);

    const { social } = dataUtils

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

    React.useEffect(() => {

    }, [cliente])

    const onSubmit = formData => {
        setLoading(true)
        emailjs.send(serviceKey, templateKey, formData, publicKey).then(
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

    return (
        <Layout>
            <Background />

            <Container>
                <Row>
                    <InfoCol className="col-12 col-lg-5">
                        <p>{dataUtils.adress.firstLine}</p>
                        <p>{dataUtils.adress.secondLine}</p>

                        <List>
                            {social.map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={item.path}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {useIcon(item.name)}
                                    </a>
                                </li>
                            ))}
                        </List>
                    </InfoCol>
                    <Col className="col-12 col-lg-7">
                        <Wrapper>
                            <FormOption checked={cliente} type="button" onClick={() => setCliente(true)}>
                                <span></span> Cliente</FormOption>
                            <FormOption checked={!cliente} type="button" onClick={() => setCliente(false)}>
                                <span></span> Corretor</FormOption>
                        </Wrapper>

                        <FormWrapper
                            onSubmit={handleSubmit(onSubmit)}
                        >
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
                </Row>
            </Container>
        </Layout>
    )
}

export default Contato
