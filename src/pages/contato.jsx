import React from "react"
import styled, { css } from "styled-components"
import { Col, Row } from "react-bootstrap"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2"

import {
    SERVICE_KEY,
    PUBLIC_KEY,
    CLIENTE_TEMPLATE_KEY,
    CORRETOR_TEMPLATE_KEY,
} from "gatsby-env-variables"

import { colors } from "../utils/colors"

import Layout from "../components/layout"
import { Input, InputPhone } from "../components/input"
import LoadSnake from "../components/loader"

import Img3 from "../assets/home/gd8-west-whales-2.jpeg"

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

const FormWrapper = styled.form`
    background: rgba(30, 28, 28, 0.79);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);

    padding: 24px 36px;
`

const CustomRow = styled(Row)`
    margin: 0 0 450px 0;
    justify-content: center;

    @media (min-width: 992px) {
        margin: 0 0 200px 0;
    }
`

const Button = styled.button`
    border: none;
    border-radius: 0;
    width: 100%;
    padding: 16px 0;
    margin: 16px 0 8px 0;

    color: ${colors.white};
    font-weight: 200;
    white-space: nowrap;

    background: ${props =>
        props.active ? colors.themeColor2 : colors.transparentBlack};
`

const Contato = () => {
    const { register, handleSubmit, reset } = useForm()
    const [loading, setLoading] = React.useState(false)

    const [cliente, setCliente] = React.useState(true)

    function showSuccess() {
        setLoading(false)
        Swal.fire(
            "Agradecemos seu contato!",
            "Em breve daremos um retorno!",
            "success"
        )
        reset();
    }

    function showError() {
        setLoading(false)
        Swal.fire(
            "Ops! Ocorreu um erro.",
            "Tente enviar seu e-mail novamente mais tarde!",
            "error"
        )
    }

    const onSubmit = formData => {
        setLoading(true)
        if (cliente) {
            emailjs
                .send(SERVICE_KEY, CLIENTE_TEMPLATE_KEY, formData, PUBLIC_KEY)
                .then(
                    () => showSuccess(),
                    () => showError()
                )
        } else {
            emailjs
                .send(SERVICE_KEY, CORRETOR_TEMPLATE_KEY, formData, PUBLIC_KEY)
                .then(
                    () => showSuccess(),
                    () => showError()
                )
        }
    }

    const page = {
        title: "Contato",
    }

    return (
        <>
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

                            <Input
                                type="text"
                                label="Projeto"
                                register={register}
                                required
                            />

                            <Button type="submit">
                                {loading ? <LoadSnake /> : "Enviar"}
                            </Button>
                        </FormWrapper>
                    </Col>
                </CustomRow>
            </Layout>
        </>
    )
}

export default Contato
