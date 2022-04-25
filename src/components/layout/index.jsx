import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { ImWhatsapp } from 'react-icons/im';

import Header from '../header';
import Footer from '../footer';
import Seo from '../seo';
import Modal from '../modal';

import { data } from '../../utils/data';

import { Container, WhatsAppButton } from './styles';

const Layout = ({ children }) => {
  const { social } = data;

  return (
    <>
      <Header />
      <Seo />
      <section>
        <Container>
          {children}
        </Container>
      </section>
      <Footer />
      <CookieConsent
        cookieName="gatsby-gdpr-google-analytics"
        style={{ backgroundColor: '#000000' }}
        location="bottom"
        declineButtonText="Rejeitar"
        buttonText="Aceitar"
        buttonStyle={{ backgroundColor: '#ffffff', color: '#0f0f0f' }}
      >
        Utilizamos cookies para melhorar sua experiência de navegação. Ao utilizar nossos serviços, você concorda com nossa
        <Modal button="Política de Privacidade" title="Política de Privacidade">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum atque saepe explicabo quam, dolore laborum voluptas tempore, nisi sint necessitatibus nemo. Asperiores recusandae at facere neque! Deleniti, dolores nisi. A.
        </Modal>
      </CookieConsent>

      <WhatsAppButton
        href={social[0].path}
        target="_blank"
      >
        <ImWhatsapp />
      </WhatsAppButton>
    </>
  );
};

export default Layout;
