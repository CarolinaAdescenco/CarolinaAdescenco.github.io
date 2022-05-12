import React from 'react';
import { graphql } from 'gatsby';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import styled from 'styled-components';

import { Col, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import {
  Button, Container, Iframe, P, TitlePage,
} from '../components/layout/styles';

import { Input, InputPhone, Select } from '../components/form';
import { colors } from '../utils/colors';
import LoadSnake from '../components/loader';

const serviceKey = 'service_atzby68';
const templateKey = 'template_5e9tnrl';
const publicKey = 'tMsyd6U9JbmASLFek';

export const query = graphql`query {
    allContentfulLancamentos {
        edges {
            node {
                title
            }
        }
    }
}`;

const Contato = ({ data }) => {
  const { register, handleSubmit } = useForm();
  const { edges } = data.allContentfulLancamentos;
  const [loading, setLoading] = React.useState(false);
  const [projetos] = React.useState(edges.map(({ node }) => node.title));

  const onSubmit = (formData) => {
    setLoading(true);
    emailjs.send(serviceKey, templateKey, formData, publicKey)
      .then(() => {
        setLoading(false);
        Swal.fire(
          'Agradecemos seu contato!',
          'Em breve daremos um retorno!',
          'success',
        );
      }, () => {
        setLoading(false);
        Swal.fire(
          'Ops! Ocorreu um erro.',
          'Tente enviar seu e-mail novamente mais tarde!',
          'error',
        );
      });
  };

  return (
    <Layout>
      <Container titlePage="Contato">

        <TitlePage>Contato</TitlePage>

        <Row className="justify-content-center">
          <Col className="col-12 col-lg-6 order-2 order-lg-1">
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3814109107584!2d-46.708610684342744!3d-23.554741267234537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57b59b835283%3A0xf6f9722e2f2125b1!2sAv.%20Pedroso%20de%20Morais%2C%202580%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005420-003!5e0!3m2!1spt-BR!2sbr!4v1650884810934!5m2!1spt-BR!2sbr" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
          </Col>
          <Col className="col-12 col-lg-6 order-1 order-lg-2">
            <p>Deixe aqui suas dúvidas ou comentários.</p>
            <p className="mb-5">Entraremos em contato o mais breve possível.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
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

              <Row className="mt-4 mb-3">
                <Col>
                  <Input
                    type="checkbox"
                    label="Sou cliente"
                    register={register}
                  />
                </Col>
                <Col>
                  <Input
                    type="checkbox"
                    label="Sou corretor"
                    register={register}
                  />
                </Col>
              </Row>

              <Button type="submit">
                { loading ? <LoadSnake /> : 'Enviar' }
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Contato;
