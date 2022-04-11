import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

const LancamentosPage = () => (
  <StaticQuery
    query={
          graphql`query {
                  allContentfulLancamentos {
                      edges {
                          node {
                              slug
                              title
                              id
                          }
                      }
                  }
              }
          `
      }
    render={(data) => (
      <section>
        {data.allContentfulLancamentos.edges.map(({ node }) => (
          <div key={node.id}>
            <h1>{node.title}</h1>
            <h2>{node.slug}</h2>
            <Link to={`${node.slug}`}>Saiba mais</Link>
          </div>
        ))}
      </section>
    )}
  />
);
export default LancamentosPage;
