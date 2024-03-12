import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import Area from '../components/area/area';
import CategoryNews from '../components/category-news';
import DetailPost from '../components/detail-post/detail-post';
import Layout from '../components/layout';
import ArticlesComponent from '../components/leading/leading-mosaic';
import NewsSlider from '../components/news-slider';
import VideoArticles from '../components/video-articles';
import { TagArea } from '../components/tag-cloud';
import Marquee from '../components/marquee/marquee';

import comic from '../assets/strip.png';

const IndexPage = () => {
  const data = useStaticQuery(query);
  const [show, setShow] = useState(false);

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <Marquee articles={data.featuredArticles.edges} />

      <div className="uk-section section section_gradient" style={{ position: 'relative' }}>
        <div className="uk-container">
          <ArticlesComponent articles={data.featuredArticles.edges} topArticle={data.topFeaturedArticle} />
        </div>
      </div>

      <div className="uk-section section" style={{ borderBottom: '1px solid black' }}>
        <div className="uk-container">
          <div data-uk-grid>
            <div className="uk-width-1-1 uk-width-2-3@s uk-width-2-5@m">
              <CategoryNews category={data.ponosnaSkolaCategory} articles={data.ponosnaSkolaArticles.edges} />
            </div>
            <div className="uk-width-1-1 uk-width-1-3@s uk-width-1-3@m ">
              <CategoryNews category={data.viseOdSkoleCategory} articles={data.viseOdSkoleArticles.edges} />
            </div>
            <div className="uk-width-1-1 uk-width-expand@s flex-col">
              <CategoryNews category={data.dogadajnicaCategory} articles={data.dogadajnicaArticles.edges} />
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section section blue">
        <div className="uk-container">
          <div data-uk-grid>
            <div className="uk-width-1-1 uk-width-2-3@s">
              <Area title="U trendu">
                <NewsSlider articles={data.topArticles.edges} />
              </Area>
              <Area title="Ostalo">
                {data.allStrapiArticle.edges.slice(0, 8).map((article, i) => (
                  <DetailPost article={article} key={i} />
                ))}
                {!show && (
                  <button type="button" className="uk-link-muted button--plain" onClick={() => setShow(true)}>
                    Više...
                  </button>
                )}
                {show &&
                  data.allStrapiArticle.edges.slice(8).map((article, i) => <DetailPost article={article} key={i} />)}
              </Area>
            </div>
            <div className="uk-width-1-1 uk-width-1-3@s">
              <VideoArticles />
              <TagArea />
              <img className="comic__image" src={comic} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
        subtitle
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          localFile {
            publicURL
          }
        }
      }
    }
    allStrapiArticle(sort: { fields: fields___sortDate, order: DESC }) {
      edges {
        node {
          strapiId
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
                  gatsbyImageData(width: 30, height: 30)
                }
              }
            }
          }
        }
      }
    }

    articles: allStrapiArticle(filter: { category: { slug: { eq: "ponosna-skola" } } }) {
      edges {
        node {
          slug
          title
          description
          created_at(formatString: "ll")
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
    ponosnaSkolaCategory: strapiCategory(slug: { eq: "ponosna-skola" }) {
      name
    }
    viseOdSkoleCategory: strapiCategory(slug: { eq: "vise-od-skole" }) {
      name
    }
    dogadajnicaCategory: strapiCategory(slug: { eq: "dogadajnica" }) {
      name
    }
    topArticles: allStrapiArticle(
      sort: { fields: fields___sortDate, order: DESC }
      limit: 3
      filter: { tags: { elemMatch: { slug: { eq: "top" } } } }
    ) {
      edges {
        node {
          ...comparisonFields
        }
      }
    }

    topFeaturedArticle: strapiArticle(tags: { elemMatch: { slug: { eq: "featured-top" } } }) {
      slug
      title
      created_at(formatString: "ll")
      article_published_at
      published_at
      category {
        name
        slug
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
    featuredArticles: allStrapiArticle(
      sort: { fields: fields___sortDate, order: DESC }
      limit: 6
      filter: { tags: { elemMatch: { slug: { eq: "featured" } } } }
    ) {
      edges {
        node {
          slug
          title
          created_at(formatString: "ll")
          article_published_at
          published_at
          category {
            name
            slug
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
    ponosnaSkolaArticles: allStrapiArticle(
      sort: { fields: fields___sortDate, order: DESC }
      limit: 4
      filter: { category: { slug: { eq: "ponosna-skola" } } }
    ) {
      edges {
        node {
          ...comparisonFields
        }
      }
    }
    viseOdSkoleArticles: allStrapiArticle(
      sort: { fields: fields___sortDate, order: DESC }
      limit: 4
      filter: { category: { slug: { eq: "vise-od-skole" } } }
    ) {
      edges {
        node {
          ...comparisonFields
        }
      }
    }
    dogadajnicaArticles: allStrapiArticle(
      sort: { fields: fields___sortDate, order: DESC }
      limit: 5
      filter: { category: { slug: { eq: "dogadajnica" } } }
    ) {
      edges {
        node {
          ...comparisonFields
        }
      }
    }
  }

  fragment comparisonFields on StrapiArticle {
    slug
    title
    created_at(formatString: "ll")
    article_published_at
    published_at
    category {
      name
      slug
    }
    author {
      name
    }
    image {
      localFile {
        childImageSharp {
          gatsbyImageData(width: 600, height: 440, transformOptions: { cropFocus: ENTROPY })
        }
      }
    }
  }
`;

export default IndexPage;
