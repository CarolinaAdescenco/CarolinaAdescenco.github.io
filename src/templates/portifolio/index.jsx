import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import Layout from '../../components/layout';
import {
  Button, Figure, Subtitulo, Wrapper,
} from './styles';
import Lightbox from '../../components/lightbox';
import { Iframe } from '../../components/layout/styles';

const PortifolioPost = (content) => {
  const {
    slug,
    title,
    description,
    endereco,
    galeria,
  } = content.pageContext;

  const lightbox1 = galeria !== null ? galeria?.map((planta) => planta.url) : [];

  return (
    <>
    {/* // <Layout> */}
      {/* <Figure bgDesktop={bannerDesktop.url} bgMobile={bannerMobile.url}> */}
      <Container>
        <Row className="justify-content-start box-principal">
          <Col className="col-12 col-lg-6 box-titulo">
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
      {/* </Figure> */}

      <Wrapper>
        {!!description && (
        <Row className="justify-content-start mb-5">
          <Col className="col-12">
            <Subtitulo>+ detalhes</Subtitulo>
            {renderRichText(description)}
          </Col>
        </Row>
        )}

        <Row className="justify-content-around mb-5">
          <Col className="col-12">
            <Subtitulo>Galeria</Subtitulo>
            {/* <Lightbox data={lightbox1} /> */}
          </Col>
        </Row>

        {
           (endereco?.lat && endereco?.lon) && (
           <Row className="justify-content-around mb-5">
             <Col className="col-12">
               <Subtitulo>Localização</Subtitulo>
               <Iframe
                 title={endereco.lat}
                 scrolling="no"
                 src={`https://maps.google.com/maps?q=${endereco.lat},${endereco.lon}&hl=pt-br&z=14&amp;&output=embed`}
               />
             </Col>
           </Row>
           )
        }

      </Wrapper>
    {/* // </Layout> */}

    </>
  );
};
export default PortifolioPost;
