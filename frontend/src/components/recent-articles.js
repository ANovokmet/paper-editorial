import Area from './area';
import RecentPost from "./recent-post";
import React from "react";

import { Link, useStaticQuery, graphql } from "gatsby";

const RecentArticles = () => {
  const { articles } = useStaticQuery(graphql`
  query {
    articles: allStrapiArticle(sort: {fields: published_at, order: DESC}, limit: 6) {
      edges {
        node {
          slug
          title
          published_at
          category {
            name
          }
          author {
            name
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }`)

  return (
    <Area title="Najnovije">
      {articles.edges.map((article, i) => (<RecentPost article={article} key={i} />))}
    </Area>
  )
}

export default RecentArticles;