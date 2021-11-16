import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Moment from "react-moment";
import Layout from "../../components/layout";
import Markdown from "react-markdown";
import RecentArticles from "../../components/recent-articles";
import ImageGallery from 'react-image-gallery';

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }) {
      strapiId
      title
      description
      category {
        name
      }
      content
      published_at
      image {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
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
      gallery {
        caption
        localFile {
          publicURL
          childImageSharp {
            fixed(width: 120) {
              src
            }
          }
        }
      }
    }
  }
`;


const Article = ({ data }) => {
  const article = data.strapiArticle;
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  const images = article.gallery && article.gallery.map(image => ({
    original: image.localFile.publicURL,
    thumbnail: image.localFile.childImageSharp.fixed.src,
  }));
  
  return (
    <Layout seo={seo}>
      <div>
        <div className="uk-section">
          <div className="uk-container uk-container-medium">

            <div data-uk-grid>
              <div className="uk-width-2-3">
                <div className="blog-hero uk-position-relative">

                  <GatsbyImage
                    style={{
                      gridArea: "1/1",
                    }}
                    alt={`Picture for ${article.title} article`}
                    image={article.image.localFile.childImageSharp.gatsbyImageData} />
                  <div className="blog-hero__title">
                    <div className="leading-post__category leading-post__category--red">
                      {article.category.name}
                    </div>
                    <h1>{article.title}</h1>

                    <div className="post-info uk-flex uk-flex-between">
                      <div className="post-info__author">
                        {article.author.name}
                      </div>
                      <div className="post-info__date">
                        <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                      </div>

                    </div>
                  </div>
                </div>

                <Markdown source={article.content} escapeHtml={false} />
                {images && <ImageGallery items={images} showPlayButton={false} autoPlay={false} />}
                
                <hr className="uk-divider-small" />

                <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                  <div>
                    {article.author.picture && (
                      <GatsbyImage
                        image={
                          article.author.picture.localFile.childImageSharp
                            .gatsbyImageData
                        }
                        alt={`Picture of ${article.author.name}`}
                        style={{ borderRadius: "50%" }} />
                    )}
                  </div>
                  <div className="uk-width-expand">
                    <p className="uk-margin-remove-bottom">
                      By {article.author.name}
                    </p>
                    <p className="uk-text-meta uk-margin-remove-top">
                      <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                    </p>
                  </div>
                </div>
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

export default Article;