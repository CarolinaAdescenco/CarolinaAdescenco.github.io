import * as React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { Col, Row } from 'react-bootstrap';

import BannerWW from '../assets/premio-gd8-west-whales.jpeg';
import Layout from '../components/layout';

import {
  BackgroundImage, Aside, Container, TitlePage, DotButton, DotColumn, Figure,
} from '../components/layout/styles';

export const query = graphql`query {
    allContentfulGeral {
      edges {
        node {
          title
          description {
            raw
          }
          background {
            url
          }
        }
      }
    }
  }
`;

const Midia = ({ data }) => {
  const { edges } = data.allContentfulGeral;
  const [element, setElement] = React.useState(0);
  return (
    <Layout>
      <Container>
        <TitlePage>Prêmio </TitlePage>

        <Figure>
          <img
            className="img-fluid"
            src="https://gd8.com.br/imagens-gd8/premio-gd8-west-whales.jpeg"
            alt="Prêmio Master Imobiliário GD8 - West Whales"
            title="Prêmio Master Imobiliário GD8 - West Whales"
          />

          <figcaption>West Whales</figcaption>
        </Figure>

      </Container>

      <Container>
        <TitlePage>GD8 na Mídia</TitlePage>

        <Row>
          <Col className="col-12 col-md-5">
            <BackgroundImage
              style={{
                backgroundImage: `url(${edges[element].node.background?.url}`,
              }}
            />
          </Col>
          <DotColumn className="col-12 col-md-1">
            {edges.map(({ node }, index) => (
              <DotButton
                key={index}
                type="button"
                active={index === element}
                onClick={() => setElement(index)}
              />
            ))}
          </DotColumn>
          <Col className="col-12 col-md-6">
            <Aside>
              { renderRichText(edges[element].node.description) }
            </Aside>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Midia;
