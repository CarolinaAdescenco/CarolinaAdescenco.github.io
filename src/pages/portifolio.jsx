import { graphql, Link } from 'gatsby';
import * as React from 'react';

import { Col, Row } from 'react-bootstrap';
import Layout from '../components/layout';

import {
  TitlePage, Container, Subtitle,
} from '../components/layout/styles';

import { portifolio } from '../utils/portifolio';

export const query = graphql`query {
    allContentfulPortifolio {
        edges {
            node {
                slug
                title
            }
        }
    }
}`;

const Portifolio = ({ data }) => {
  const { edges } = data.allContentfulPortifolio;

  return (
    <Layout>
      <Container>
        <TitlePage>Portifólio</TitlePage>
        {
                portifolio.paragraph.map((item, i) => (
                  <p key={i}>{item}</p>
                ))
            }

        {
                edges.map(({ node }, i) => (
                  <Link key={i} to={node.slug}>{node.title}</Link>
                ))
            }

      </Container>
    </Layout>
  );
};

export default Portifolio;
