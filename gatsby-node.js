const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const enterprisePost = path.resolve('src/templates/enterprise-post.jsx');

  const { data } = await graphql(`
      query {
          allContentfulLancamentos {
              edges {
                  node {
                      id
                      title
                        slug
                  }
              }
          }
      }
    `);

  data.allContentfulLancamentos.edges.forEach((edge) => {
    actions.createPage({
      path: `lancamentos/${edge.node.slug}`,
      component: enterprisePost,
      context: edge.node,
    });
  });
};
