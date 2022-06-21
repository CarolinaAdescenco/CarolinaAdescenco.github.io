import React from "react"
import CookieConsent from "react-cookie-consent"

import Header from "../header"
import Seo from "../seo"
import Modal from "../modal"
import Footer from "../footer"

import { Main } from "./styles"

import Contact from "../contact"

const Layout = ({ children, description, meta, page, bg }) => {
    const { title, subtitle } = page

    return (
        <>
            <Seo
                description={description}
                meta={meta}
                title={title}
                titlePage={subtitle}
            />

            <Header className="fixed" page={page} />

            <Main bg={bg}>
                {children}

                {title === "Contato" && <Footer />}
            </Main>

            <Contact />

            <CookieConsent
                cookieName="gatsby-gdpr-google-analytics"
                style={{ backgroundColor: "#000000" }}
                location="bottom"
                declineButtonText="Rejeitar"
                buttonText="Aceitar"
                buttonStyle={{ backgroundColor: "#ffffff", color: "#0f0f0f" }}
            >
                Utilizamos cookies para melhorar sua experiência de navegação.
                Ao utilizar nossos serviços, você concorda com nossa
                <Modal
                    button="Política de Privacidade"
                    title="Política de Privacidade"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum atque saepe explicabo quam, dolore laborum voluptas
                    tempore, nisi sint necessitatibus nemo. Asperiores
                    recusandae at facere neque! Deleniti, dolores nisi. A.
                </Modal>
            </CookieConsent>
        </>
    )
}

export default Layout
