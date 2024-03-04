import React from 'react';
import Area from './area/area';
import RecentPost from './post/post';

import { graphql, useStaticQuery } from 'gatsby';

const RecentArticles = () => {
  const { articles } = useStaticQuery(graphql`
    query {
      articles: allStrapiArticle(sort: { fields: fields___sortDate, order: DESC }, limit: 6) {
        edges {
          node {
            slug
            title
            article_published_at
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
                  gatsbyImageData(width: 300, height: 220)
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Area title="Najnovije" className="area--grow">
      {articles.edges.map((article, i) => (
        <RecentPost article={article} key={i} />
      ))}
    </Area>
  );
};

export default RecentArticles;
