import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';

export const query = graphql`query {
    allContentfulLancamentos {
        edges {
            node {
                slug
                title
                id
            }
        }
    }
}`;

const LancamentosPage = ({ data }) => (
  <Layout>
    {data.allContentfulLancamentos.edges.map(({ node }) => (
      <div key={node.id}>
        <h1>{node.title}</h1>
        <h2>{node.slug}</h2>
        <Link to={`${node.slug}`}>Saiba mais</Link>
      </div>
    ))}
  </Layout>
);
export default LancamentosPage;
