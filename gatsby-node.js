const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const casePost = path.resolve("src/templates/case/index.jsx")

    const { data } = await graphql(`
        query {
            allContentfulCases {
                edges {
                    node {
                        slug
                        title
                        endereco {
                            lat
                            lon
                        }
                        fichaTecnica {
                            raw
                        }
                        descricao1
                        descricao2
                        description {
                            raw
                        }
                        background {
                            url
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
    `)

    data.allContentfulCases.edges.forEach(edge => {
        actions.createPage({
            path: `cases/${edge.node.slug}`,
            component: casePost,
            context: edge.node,
        })
    })
}
