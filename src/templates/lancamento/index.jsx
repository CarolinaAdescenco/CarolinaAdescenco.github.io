import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Gallery from '@browniebroke/gatsby-image-gallery';

import Layout from '../../components/layout';
import { Button, Figure } from './styles';
import Lightbox from '../../components/lightbox';

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

  const images = plantas.map((planta) => planta.url);

  React.useEffect(() => {
    console.log(images);
  }, []);

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

      <Container>
        <Row>
          <Col className="col-12 col-lg-6">
            <Lightbox data={images} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default LancamentoPost;
