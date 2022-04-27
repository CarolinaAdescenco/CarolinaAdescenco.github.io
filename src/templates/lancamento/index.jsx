import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Lightbox from 'react-image-lightbox';

import Slider from '../../components/carousel';
import Layout from '../../components/layout';
import { Button, CarouselItem, Figure } from './styles';

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

  const [photoIndex, setPhotoIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);

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
            <button type="button" onClick={() => setOpen(true)}>
              Open Lightbox
            </button>

            {open && (
            <Lightbox
              mainSrc={plantas[photoIndex]}
              nextSrc={plantas[(photoIndex + 1) % plantas.length]}
              prevSrc={plantas[(photoIndex + plantas.length - 1) % plantas.length]}
              onCloseRequest={() => setOpen(false)}
// https://www.npmjs.com/package/react-image-lightbox
            />
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default LancamentoPost;
