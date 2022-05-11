import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { Row } from 'react-bootstrap';
import { IoIosArrowRoundForward } from 'react-icons/io';

import Layout from '../components/layout';
import { Container, TitlePage, Subcontent } from '../components/layout/styles';

import { lancamentos } from '../utils/lancamentos';

import {
  Aside,
  AsideContent,
  Separator,
} from '../components/card-enterprise/styles';

const Card = styled(Link)`
    text-decoration: none;
`;

export const query = graphql`
    query {
        allContentfulLancamentos {
            edges {
                node {
                    id
                    title
                    slug
                    bannerDesktop {
                        url
                        title
                        description
                    }
                    bannerMobile {
                        url
                        title
                        description
                    }
                    miniDescricao1
                    miniDescricao2
                }
            }
        }
    }
`;

const LancamentosPage = ({ data }) => {
  const { edges } = data.allContentfulLancamentos;
  const { title, first, second } = lancamentos;

  return (
    <Layout>
      <Container>
        <TitlePage>{title}</TitlePage>

        <Subcontent>
          {first.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </Subcontent>

        <Subcontent>
          {second.map((item, i) => (
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
                  <p>
                    {node.miniDescricao1}
                    <Separator />
                    {node.miniDescricao2}
                  </p>
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
export default LancamentosPage;
