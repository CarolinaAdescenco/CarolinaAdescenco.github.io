import React from 'react';
import { graphql } from 'gatsby';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import styled from 'styled-components';

import { Col, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import { Button, TitlePage } from '../components/layout/styles';

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
      <TitlePage>Contato</TitlePage>

      <Row className="justify-content-center">
        <Col className="col-12 col-lg-6">
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
    </Layout>
  );
};

export default Contato;
