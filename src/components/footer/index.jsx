import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { data } from '../../utils/data';
import SeloAbrinq from '../../assets/selo-fundacao-abrinq.png';
import SeloPqe from '../../assets/pqe-secovi.png';

import {
  FooterComponent, Hr, Link, Logos,
} from './styles';

const Footer = () => (
  <FooterComponent>
    <Container>
      <Hr />

      <Row>
        <Col className="col-12 col-lg-7">
          <Link to={data.adress.link}>{data.adress.name}</Link>
          <Link to={data.phone}>{data.phone}</Link>

          <Row>

            {
                  data.social.map((item) => (
                    <a key={item.name} href={item.path}>{`<${item.icon}/>`}</a>
                  ))
              }
          </Row>
        </Col>

        <Col className="col-12 col-lg-5">
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

export default Footer;
