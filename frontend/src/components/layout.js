import { StaticQuery, graphql } from 'gatsby';
import 'moment/locale/hr';
import PropTypes from 'prop-types';
import React from 'react';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import '../assets/css/main.css';
import Nav from './nav/nav';
import Seo from './seo';

UIkit.use(Icons);

const Layout = ({ children, seo }) => (
  <StaticQuery
    query={graphql`
      query {
        strapiHomepage {
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
      }
    `}
    render={(data) => (
      <>
        <Seo seo={seo} />
        <Nav />
        <main>{children}</main>
        <footer className="uk-section uk-section-small bg-primary">
          <div className="uk-container">
            <p className="uk-text-small uk-text-center">Izradilo uredništvo časopisa VII. gimnazije</p>
          </div>
        </footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
