import * as React from 'react';
import { Col, Row } from 'react-bootstrap';

import ImgPremio from '../assets/premio-gd8-west-whales.jpeg';
import Layout from '../components/layout';

import {
  BackgroundImage, Aside, Container, TitlePage, DotButton, DotColumn, Figure, Subcontent,
} from '../components/layout/styles';

import { midia } from '../utils/midia';

const Midia = () => {
//   const { edges } = data.allContentfulGeral;
  const [element, setElement] = React.useState(0);

  const { first, second } = midia;

  return (
    <Layout titlePage="Mídia">
      <Container>
        <TitlePage>{first.title}</TitlePage>
        <Subcontent>
          {first.paragraph.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </Subcontent>

        <Figure className="mt-5">
          <img
            className="img-fluid"
            src={ImgPremio}
            alt="Prêmio Master Imobiliário GD8 - West Whales"
            title="Prêmio Master Imobiliário GD8 - West Whales"
          />

          <figcaption>West Whales</figcaption>
        </Figure>

      </Container>

      <Container>
        <TitlePage>{second.title}</TitlePage>
        <Subcontent>
          {second.paragraph.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </Subcontent>

        <Row>
          <Col className="col-12 col-md-5">
            {/* <BackgroundImage
              style={{
                backgroundImage: `url(${edges[element].node.background?.url}`,
              }}
            /> */}
          </Col>
          <DotColumn className="col-12 col-md-1">
            {/* {edges.map(({ node }, index) => (
              <DotButton
                key={index}
                type="button"
                active={index === element}
                onClick={() => setElement(index)}
              />
            ))} */}
          </DotColumn>
          <Col className="col-12 col-md-6">
            <Aside>
              {/* { renderRichText(edges[element].node.description) } */}
            </Aside>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Midia;
