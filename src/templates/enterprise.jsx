import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const EnterprisePage = () => (
  <StaticQuery
    query={
        graphql`query MyQuery {
                allContentfulNovosEmpreendimentos {
                    edges {
                        node {
                            description {
                                raw
                            }
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
        {data.allContentfulNovosEmpreendimentos.edges.map(({ node }) => (
          <div key={node.id}>
            <h1>{node.title}</h1>
            <section>{node.raw}</section>
          </div>
        ))}
      </section>
    )}
  />
);
export default EnterprisePage;
