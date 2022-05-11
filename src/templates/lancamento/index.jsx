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
    endereco,
    bannerDesktop,
    bannerMobile,
    slug,
    title,
    fichaTecnica,
    description,
    plantas,
    galeria,
  } = content.pageContext;

  const lightbox1 = plantas !== null ? plantas.map((planta) => planta.url) : [];
  const lightbox2 = galeria !== null ? galeria.map((gal) => gal.url) : [];

  return (
    <Layout>
      <Figure bgDesktop={bannerDesktop.url} bgMobile={bannerMobile.url}>
        <Container>
          <Row className="justify-content-center box-principal">
            <Col className="col-12 col-lg-6 box-titulo">
              <h1>{title}</h1>
              <Button to="/contato">Saber mais</Button>
            </Col>

            {
                fichaTecnica && (
                <Col className="col-10 col-lg-5 box-black">{renderRichText(fichaTecnica)}</Col>
                )
            }

          </Row>
        </Container>
      </Figure>

      <Wrapper>
        {!!description && (
        <Row className="justify-content-start mb-5">
          <Col className="col-12 col-lg-10">
            <Subtitulo>+ detalhes</Subtitulo>
            {renderRichText(description)}
          </Col>
        </Row>
        )}

        {
            (plantas || galeria) && (
            <Row className="justify-content-around mb-5">
              {
                    plantas && (
                    <Col className="col-12 col-lg-6">
                      <Subtitulo>Plantas</Subtitulo>
                      <Lightbox data={lightbox1} />
                    </Col>
                    )
                }

              {
                    galeria && (
                    <Col className="col-12 col-lg-6 mt-5 mt-lg-0">
                      <Subtitulo>Galeria de Imagens</Subtitulo>
                      <Lightbox data={lightbox2} />
                    </Col>
                    )
                }
            </Row>
            )
        }

        {
           (endereco?.lat && endereco?.lon) && (
           <Row className="justify-content-around mb-5">
             <Col className="col-12">
               <Subtitulo>Localização</Subtitulo>
               <Iframe
                 title={slug}
                 scrolling="no"
                 src={`https://maps.google.com/maps?q=${endereco.lat},${endereco.lon}&hl=pt-br&z=14&amp;&output=embed`}
               />
             </Col>
           </Row>
           )
        }

      </Wrapper>
    </Layout>
  );
};
export default LancamentoPost;
