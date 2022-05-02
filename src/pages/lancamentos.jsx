import React from 'react';
import { graphql, Link } from 'gatsby';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';

import { IoIosArrowRoundForward } from 'react-icons/io';
import Layout from '../components/layout';
import { Container, TitlePage } from '../components/layout/styles';

import { lancamentos } from '../utils/lancamentos';

import {
  Action, Aside, AsideContent, Separator,
} from '../components/card-enterprise/styles';

export const query = graphql`query {
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
}`;

const LancamentosPage = ({ data }) => {
  const { edges } = data.allContentfulLancamentos;

  return (
    <Layout>
      <Container>
        <TitlePage>Lançamentos</TitlePage>

        <Row>
          {
                  lancamentos.first.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))
              }
        </Row>
        <Row>
          {
                  lancamentos.second.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))
              }
        </Row>

        <Row className="mt-4">
          {
              edges.map(({ node }, i) => (
                <Link to={node.slug} key={i} className="col-12 col-md-4">
                  <Aside>
                    <AsideContent>
                      <h3>{node.title}</h3>
                      <p>
                        {node.miniDescricao1}
                        <Separator />
                        {node.miniDescricao2}
                      </p>
                      {/* <Action> */}
                      saiba mais
                      <IoIosArrowRoundForward />
                      {/* </Action>s */}
                    </AsideContent>
                  </Aside>
                </Link>
              ))
            }
        </Row>
      </Container>
    </Layout>
  );
};
export default LancamentosPage;
