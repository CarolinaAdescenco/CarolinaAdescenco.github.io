import * as React from 'react';

import { graphql } from 'gatsby';

import Slider from '../components/carousel';
import Layout from '../components/layout';
import CardEnterprise from '../components/card-enterprise';

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
}
`;

const Index = ({ data }) => (
  <Layout>
    <Slider data={data.allContentfulLancamentos} />
    <CardEnterprise data={data.allContentfulLancamentos} type="Lançamento" />
  </Layout>
);

export default Index;
