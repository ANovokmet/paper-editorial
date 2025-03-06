import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import RecentArticles from '../components/recent-articles';
import Markdown from 'react-markdown';

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout seo={data.strapiHomepage.seo}>
      <div>
        <div className="uk-section ">
          <div className="uk-container uk-container-medium">
            <div data-uk-grid>
              <div className="uk-width-1-1 uk-width-2-3@m">
                <div className="carded">
                  <Markdown allowDangerousHtml={true}>{data.strapiImpressum.content}</Markdown>
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
    strapiImpressum {
      content
    }
  }
`;

export default IndexPage;
