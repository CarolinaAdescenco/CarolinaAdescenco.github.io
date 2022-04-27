import * as React from 'react';
import { graphql } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

import { Col, Row } from 'react-bootstrap';
import Layout from '../components/layout';

import {
  BackgroundImage, Button, Aside, TitlePage, Container,
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

const Sobre = ({ data }) => {
  const { edges } = data.allContentfulGeral;
  const [element, setElement] = React.useState(0);
  return (
    <Layout>
      <Container>
        <TitlePage>Sobre a GD8</TitlePage>

        <Row>
          <Col className="col-12 col-md-6">
            <BackgroundImage
              style={{
                backgroundImage: `url(${edges[element].node.background?.url}`,
              }}
            />
          </Col>
          <Col className="col-12 col-md-6">

            <Row className="justify-space-between">
              { edges.map(({ node }, index) => (
                <Col key={index} className="col-6 col-xl-4">
                  <Button
                    type="button"
                    active={index === element}
                    onClick={() => setElement(index)}
                  >
                    {node.title}
                  </Button>
                </Col>
              ))}
            </Row>

            <Aside>
              { renderRichText(edges[element].node.description) }
            </Aside>
          </Col>
        </Row>
      </Container>

    </Layout>
  );
};

export default Sobre;
