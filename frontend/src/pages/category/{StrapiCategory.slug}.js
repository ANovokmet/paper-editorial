import React from "react";
import { graphql } from "gatsby";
import ArticlesComponent from "../../components/articles";
import Layout from "../../components/layout";
import Area from "../../components/area";
import DetailPost from "../../components/detail-post";
import RecentArticles from "../../components/recent-articles";

export const query = graphql`
  query Category($slug: String!) {
    articles: allStrapiArticle(filter: { category: { slug: { eq: $slug } } }) {
      edges {
        node {
          slug
          title
          description
          published_at
          category {
            name
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 660)
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
    category: strapiCategory(slug: { eq: $slug }) {
      name
    }
  }
`;

const Category = ({ data }) => {
  const articles = data.articles.edges;
  const category = data.category.name;
  const seo = {
    metaTitle: category,
    metaDescription: `All ${category} articles`,
  };

  return (
    <Layout seo={seo}>
      <div className="uk-section">
        <div className="uk-container uk-container-medium">
          <h1>{category}</h1>
          <div className="uk-width-1">
            <div data-uk-grid>

              <div className="uk-width-2-3">
                {articles.map((article, i) => (
                  <div key={i} style={{marginBottom: 20}}>
                    <DetailPost article={article} key={i} />
                  </div>
                ))}
              </div>

              <div className="uk-width-1-3">
                <div data-uk-sticky="offset: 100">
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
