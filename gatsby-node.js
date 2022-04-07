const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const enterprisePage = path.resolve('src/templates/enterprise-page.jsx');

  const result = await graphql(`
    query {
        allContentfulLancamentos {
            edges {
                node {
                    id
                    title
                }
            }
        }
    }
  `);
  result.data.allContentfulLancamentos.edges.forEach((edge) => {
    createPage({
      path: `lancamentos/${edge.node.id}`,
      component: enterprisePage,
      context: {
        title: edge.node.title,
        data: edge.node,
      },
    });
  });
};
