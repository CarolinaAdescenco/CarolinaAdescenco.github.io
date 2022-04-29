const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const lancamentoPost = path.resolve('src/templates/lancamento/index.jsx');

  const { data } = await graphql(`
      query {
        allContentfulLancamentos {
            edges {
              node {
                id
                endereco {
                    raw
                }
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
                slug
                title
                miniDescricao1
                miniDescricao2
                fichaTecnica {
                    raw
                }
                description {
                  raw
                }
                plantas {
                  url
                  title
                  description
                }
                galeria {
                  url
                  title
                  description
                }
              }
            }
        }
      }
    `);

  data.allContentfulLancamentos.edges.forEach((edge) => {
    actions.createPage({
      path: `lancamentos/${edge.node.slug}`,
      component: lancamentoPost,
      context: edge.node,
    });
  });
};
