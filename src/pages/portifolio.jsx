import * as React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { IoIosArrowRoundForward } from 'react-icons/io';

import Layout from '../components/layout';

import { TitlePage, Container, Subcontent } from '../components/layout/styles';

import {
  Aside,
  AsideContent,
} from '../components/card-enterprise/styles';

import { portifolio } from '../utils/portifolio';

export const query = graphql`
    query {
        allContentfulPortifolio {
            edges {
                node {
                    slug
                    title
                }
            }
        }
    }
`;

const Card = styled(Link)`
    text-decoration: none;
`;

const Portifolio = ({ data }) => {
  const { edges } = data.allContentfulPortifolio;

  return (
    <Layout>
      <Container>
        <TitlePage>{portifolio.title}</TitlePage>
        <Subcontent>
          {portifolio.paragraph.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </Subcontent>

        <Row className="mt-5">
          {edges.map(({ node }, i) => (
            <Card
              to={node.slug}
              key={i}
              className="col-12 col-lg-4 mb-4"
            >
              <Aside>
                <AsideContent>
                  <h3>{node.title}</h3>
                  saiba mais
                  <IoIosArrowRoundForward />
                </AsideContent>
              </Aside>
            </Card>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default Portifolio;
