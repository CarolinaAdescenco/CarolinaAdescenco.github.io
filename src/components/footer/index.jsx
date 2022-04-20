import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { FiMapPin, FiPhoneOutgoing } from 'react-icons/fi';
import { ImFacebook, ImTwitter, ImWhatsapp } from 'react-icons/im';

import SeloAbrinq from '../../assets/selo-fundacao-abrinq.png';
import SeloPqe from '../../assets/pqe-secovi.png';

import { data } from '../../utils/data';

import { Hr } from '../layout/styles';

import {
  FooterComponent, IconRow, Logos,
} from './styles';

const Footer = () => {
  function onlyNumbers(string) {
    return string.replace(/\D/g, '');
  }

  function useIcon(name) {
    switch (name) {
      case 'whatsapp':
        return <ImWhatsapp />;
      case 'facebook':
        return <ImFacebook />;
      case 'instagram':
        return <AiOutlineInstagram />;
      case 'twitter':
        return <ImTwitter />;
      case 'youtube':
        return <AiOutlineYoutube />;
      default:
        return <></>;
    }
  }

  return (
    <FooterComponent>
      <Container>
        <Hr />

        <Row className="justify-content-between">
          <Col className="col-12 col-lg-7">
            <a href={data.adress.link} target="_blank" rel="noreferrer">
              <FiMapPin />
              {data.adress.name}
            </a>
            <a href={`tel:+${onlyNumbers(data.phone)}`} target="_blank" rel="noreferrer">
              <FiPhoneOutgoing />
              {data.phone}
            </a>

            <IconRow>
              {
                    data.social.map((item) => (
                      <a key={item.name} href={item.path} target="_blank" rel="noreferrer">{useIcon(item.name)}</a>
                    ))
                }
            </IconRow>
          </Col>

          <Col className="col-12 col-lg-4">
            <Logos>
              <img
                src={SeloAbrinq}
                alt="Fundação Abrinq - Empresa amiga da criança"
                title="Fundação Abrinq - Empresa amiga da criança"
                className="img-fluid"
              />
              <img
                src={SeloPqe}
                alt="PQE Secovi - Programa de qualificação essencial"
                title="PQE Secovi - Programa de qualificação essencial"
                className="img-fluid"
              />
            </Logos>
          </Col>
        </Row>
      </Container>
    </FooterComponent>
  );
};

export default Footer;
