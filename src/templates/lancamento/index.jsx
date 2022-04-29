import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from '../../components/layout';
import {
  Button, Figure, Subtitulo, Wrapper,
} from './styles';
import Lightbox from '../../components/lightbox';
import { Iframe } from '../../components/layout/styles';

const LancamentoPost = (content) => {
  const {
    id,
    endereco,
    bannerDesktop,
    bannerMobile,
    slug,
    title,
    miniDescricao1,
    miniDescricao2,
    fichaTecnica,
    description,
    plantas,
    galeria,
  } = content.pageContext;

  const lightbox1 = plantas.map((planta) => planta.url);
  const lightbox2 = galeria.map((gal) => gal.url);

  const end = renderRichText(endereco);

  console.log('teste', renderRichText(description));

  return (
    <Layout>
      <Figure bgDesktop={bannerDesktop.url} bgMobile={bannerMobile.url}>
        <Container>
          <Row className="justify-content-center box-principal">
            <Col className="col-12 col-lg-6 box-titulo">
              <h1>{title}</h1>
              <Button>Saber mais</Button>
            </Col>
            <Col className="col-10 col-lg-5 box-black">{renderRichText(fichaTecnica)}</Col>
          </Row>
        </Container>
      </Figure>

      <Wrapper>
        {!!description && (
        <Row className="justify-content-start mb-5">
          <Col className="col-12 col-lg-8">
            <Subtitulo>+ detalhes</Subtitulo>
            {renderRichText(description)}
          </Col>
        </Row>
        )}

        <Row className="justify-content-around mb-5">
          <Col className="col-12 col-lg-6">
            <Subtitulo>Plantas</Subtitulo>
            <Lightbox data={lightbox1} />
          </Col>
          <Col className="col-12 col-lg-6">
            <Subtitulo>Galeria de Imagens</Subtitulo>
            <Lightbox data={lightbox2} />
          </Col>
        </Row>

        <Row className="justify-content-around mb-5">
          <Col className="col-12 col-lg-6">
            <Subtitulo>Localização</Subtitulo>
            {/* <iframe src={end} frameBorder="0" title="teste" /> */}
            {/* <Iframe src={renderRichText(endereco)} /> */}
          </Col>
        </Row>
      </Wrapper>
    </Layout>
  );
};
export default LancamentoPost;
