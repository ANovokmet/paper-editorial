import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Moment from "react-moment";
import Layout from "../../components/layout";
import Markdown from "react-markdown";
import RecentArticles from "../../components/recent-articles";
import ImageGallery from 'react-image-gallery';
import Tag from '../../components/tag';

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }) {
      strapiId
      title
      description
      category {
        name
        slug
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
      tags {
        Name
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
              <div className="uk-width-1-1 uk-width-2-3@m">
                <div className="blog-hero uk-position-relative">
                  <Link to={`/category/${article.category.slug}`} className="uk-link-reset">
                    <Tag>{article.category.name}</Tag>
                  </Link>
                  <h1 className="uk-margin-small">{article.title}</h1>
                  <div className="post-info uk-flex uk-flex-between">
                    <div className="post-info__author">
                      {article.author ? article.author.name : 'Autor'}
                    </div>
                    <div className="post-info__date">
                      <Moment format="LL" locale="hr">{article.published_at}</Moment>
                    </div>
                  </div>
                  <GatsbyImage
                    className="uk-height-max-large"
                    objectFit="contain"
                    style={{ gridArea: "1/1" }}
                    alt={`Picture for ${article.title} article`}
                    image={article.image.localFile.childImageSharp.gatsbyImageData} />
                </div>

                <Markdown source={article.content} escapeHtml={false} />
                {images && images.length ? <ImageGallery items={images} showPlayButton={false} autoPlay={false} /> : null}

                <div className="tags">
                  <div className="tags__title">Oznake</div>
                  {article.tags.map(tag => (<Tag>{tag.Name}</Tag>))}
                </div>

                <hr className="uk-divider-small" />

                <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                  <div>
                    {article.author && article.author.picture && (
                      <GatsbyImage
                        image={
                          article.author.picture.localFile.childImageSharp
                            .gatsbyImageData
                        }
                        alt={`Picture of ${article.author ? article.author.name : 'Autor'}`}
                        style={{ borderRadius: "50%" }} />
                    )}
                  </div>
                  <div className="uk-width-expand">
                    <p className="uk-margin-remove-bottom">
                      {article.author ? article.author.name : 'Autor'}
                    </p>
                    <p className="uk-text-meta uk-margin-remove-top">
                      <Moment format="LL" locale="hr">{article.published_at}</Moment>
                    </p>
                  </div>
                </div>
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

export default Article;
