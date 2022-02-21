import React from "react";
import { graphql } from "gatsby";
import ArticlesComponent from "../../components/articles";
import Layout from "../../components/layout";
import Area from "../../components/area";
import DetailPost from "../../components/detail-post";
import RecentArticles from "../../components/recent-articles";

export const query = graphql`
  query Tag($slug: String!) {
    articles: allStrapiArticle(
      filter: {tags: {elemMatch: {slug: {eq: $slug}}}}
      sort: {fields: fields___sortDate, order: DESC}
    ) {
      edges {
        node {
          slug
          title
          description
          article_published_at
          published_at
          category {
            name
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300, height: 220)
              }
            }
          }
          author {
            name
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 30)
                }
              }
            }
          }
        }
      }
    }
    tag: strapiTag(slug: { eq: $slug }) {
      Name
    }
  }
`;

const Category = ({ data }) => {
  const articles = data.articles.edges;
  const tag = data.tag.Name;
  const seo = {
    metaTitle: tag,
    metaDescription: `All ${tag} articles`,
  };

  return (
    <Layout seo={seo}>
      <div className="uk-section">
        <div className="uk-container uk-container-medium">
          <h1>{tag}</h1>
          <div className="uk-width-1">
            <div data-uk-grid>

              <div className="uk-width-1-1 uk-width-2-3@m">
                {articles.map((article, i) => (
                  <div key={i} style={{ marginBottom: 20 }}>
                    <DetailPost article={article} key={i} />
                  </div>
                ))}
              </div>

              <div className="uk-width-1-1 uk-width-1-3@m">
                <div data-uk-sticky="offset: 100; media: @m">
                  <RecentArticles />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;
