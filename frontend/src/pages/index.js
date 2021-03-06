import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import Area from '../components/area';
import CategoryNews from "../components/category-news";
import DetailPost from "../components/detail-post";
import Layout from "../components/layout";
import ArticlesComponent from "../components/leading-mosaic";
import NewsSlider from "../components/news-slider";
import RecentArticles from "../components/recent-articles";
import VideoArticles from "../components/video-articles";
import TagCloud from "../components/tag-cloud";

const IndexPage = () => {
  const data = useStaticQuery(query);
  const [show, setShow] = useState(false);

  return (
    <Layout seo={data.strapiHomepage.seo}>

      <div className="uk-section section_gradient" style={{position: 'relative'}}>
        <div className="uk-container">
          {/* <div className="uk-flex uk-flex-between">
            <h1>{data.strapiHomepage.hero.title}</h1>
            <h2>{data.strapiHomepage.hero.subtitle}</h2>
          </div> */}
          <ArticlesComponent articles={data.featuredArticles.edges} topArticle={data.topFeaturedArticle} />
        </div>
      </div>

      <div className="uk-section">
        <div className="uk-container">
          <div data-uk-grid>
            <div className="uk-width-1-1 uk-width-1-3@s">
              {/* <div data-uk-sticky="offset: 100; media: @m"> */}
                <RecentArticles />
                <VideoArticles />
                <TagCloud />
              {/* </div> */}

              {/* <img src="https://7edma.weebly.com/uploads/1/3/1/1/131192520/background-images/303929084.jpg" /> */}
            </div>
            <div className="uk-width-1-1 uk-width-2-3@s">

              <div className="uk-width-1" style={{ marginBottom: 30 }}>

                <Area title="U trendu">
                  <NewsSlider articles={data.topArticles.edges} />
                </Area>

              </div>


              <div className="uk-width-1">
                <div data-uk-grid>

                  <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-2@m">
                    <CategoryNews category={data.ponosnaSkolaCategory} articles={data.ponosnaSkolaArticles.edges} />
                  </div>

                  <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-2@m">
                    <CategoryNews category={data.viseOdSkoleCategory} articles={data.viseOdSkoleArticles.edges} />
                  </div>

                </div>
              </div>


              <div className="uk-width-1">
                <div data-uk-grid>

                  <div className="uk-width-1-1">
                    <Area title="Ostalo">
                      {data.allStrapiArticle.edges.slice(0, 8).map((article, i) => (<DetailPost article={article} key={i} />))}
                      {!show && (<a className="uk-link-muted" onClick={() => setShow(true)}><h1>Vi??e...</h1></a>)}
                      {show && (data.allStrapiArticle.edges.slice(8).map((article, i) => (<DetailPost article={article} key={i} />)))}
                    </Area>
                  </div>

                </div>
              </div>
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

  articles: allStrapiArticle(filter: {category: {slug: {eq: "ponosna-skola"}}}) {
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
  ponosnaSkolaCategory: strapiCategory(slug: {eq: "ponosna-skola"}) {
    name
  }
  viseOdSkoleCategory: strapiCategory(slug: {eq: "vise-od-skole"}) {
    name
  }
  topArticles: allStrapiArticle(
    sort: {fields: fields___sortDate, order: DESC}
    limit: 3
    filter: {tags: {elemMatch: {slug: {eq: "top"}}}}
  ) {
    edges {
      node {
        ...comparisonFields
      }
    }
  }

  topFeaturedArticle: strapiArticle(tags: {elemMatch: {slug: {eq: "featured-top"}}}) {
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
    sort: {fields: fields___sortDate, order: DESC}
    limit: 5
    filter: {tags: {elemMatch: {slug: {eq: "featured"}}}}
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
    sort: {fields: fields___sortDate, order: DESC}
    limit: 6
    filter: {category: {slug: {eq: "ponosna-skola"}}}
  ) {
    edges {
      node {
        ...comparisonFields
      }
    }
  }
  viseOdSkoleArticles: allStrapiArticle(
    sort: {fields: fields___sortDate, order: DESC}
    limit: 6
    filter: {category: {slug: {eq: "vise-od-skole"}}}
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
        gatsbyImageData(width: 300, height: 220)
      }
    }
  }
}

`;

export default IndexPage;
