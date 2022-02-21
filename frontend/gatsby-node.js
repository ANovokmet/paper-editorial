exports.onCreateWebpackConfig = ({
    actions,
    plugins,
    stage
  }) => {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          path: require.resolve("path-browserify")
        },
        fallback: {
          fs: false,
        }
      }
    })
    if (stage === 'build-javascript' || stage === 'develop') {
      actions.setWebpackConfig({
        plugins: [
          plugins.provide({ process: 'process/browser' })
        ]
      })
    }
  }

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `StrapiArticle`) { // name of type you can get in graphiql in docs section or by ctrl+clicking on `node` field in your query
    createNodeField({
      node,
      name: `sortDate`,
      value: node.article_published_at || node.published_at || "1970-01-01", // either date if node has this field or very early date that should be before any of the date in content
    })
  }
};
