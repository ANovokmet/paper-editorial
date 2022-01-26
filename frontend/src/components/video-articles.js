import Area from './area';
import RecentPost from "./recent-post";
import React from "react";

import { Link, useStaticQuery, graphql } from "gatsby";

const RecentArticles = () => {
  const { articles } = useStaticQuery(graphql`
  query {
    articles: allStrapiArticle(
      sort: {fields: published_at, order: DESC}
      limit: 6
      filter: {category: {slug: {eq: "gledaj"}}}
    ) {
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
                gatsbyImageData(width: 150, height: 110)
              }
            }
          }
        }
      }
    }
  }`)

  return (
    <Area title="Pogledajmo">
      {articles.edges.map((article, i) => (<RecentPost article={article} key={i} video={true} />))}
    </Area>
  )
}

export default RecentArticles;