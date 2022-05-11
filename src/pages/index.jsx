import * as React from 'react';
import styled from 'styled-components';

import { graphql, Link as link } from 'gatsby';

import Slider from '../components/carousel';
import Layout from '../components/layout';
import CardEnterprise from '../components/card-enterprise';

import { Container, Subtitle, Subcontent } from '../components/layout/styles';

import { home } from '../utils/home';
import { colors } from '../utils/colors';

export const query = graphql`
    query {
        allContentfulLancamentos(limit: 5) {
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

export const Link = styled(link)`
    border: none;
    border-radius: 0;
    padding: 16px 48px;
    margin: 24px 0;
    text-decoration: none;
    display: flex;
    width: fit-content;

    font-size: 18px;
    color: ${colors.white};
    font-weight: 200;
    white-space: nowrap;

    background: ${colors.themeColor2};
    transition: 0.2s all;

    &:hover {
        color: ${colors.white};
        background: ${colors.themeColor3};
    }
`;

const Index = ({ data }) => {
  const { first, second } = home;

  return (
    <Layout>
      <Slider data={data.allContentfulLancamentos} />
      <Container>
        <Subtitle>{first.title}</Subtitle>
        <Subcontent>
          {first.paragraph.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </Subcontent>
      </Container>

      <CardEnterprise
        data={data.allContentfulLancamentos}
        type="Lançamento"
      />

      <Container>
        <Subtitle>{second.title}</Subtitle>
        <Subcontent>
          {second.paragraph.map((item, i) => (
            <p key={i}>{item}</p>
          ))}

          <Link to={second.action.path}>{second.action.text}</Link>
        </Subcontent>
      </Container>
    </Layout>
  );
};

export default Index;
