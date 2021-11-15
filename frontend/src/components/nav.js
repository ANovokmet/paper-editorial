import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

const Nav = () => (
  <StaticQuery
    query={graphql`
      query {
        strapiGlobal {
          siteName
        }
        allStrapiCategory {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <nav className="navbar navbar--primary uk-navbar-container" data-uk-navbar>
          <div className="uk-navbar-center">
            <ul className="uk-navbar-nav">
              <li>
                <Link to="/" className="uk-link-text uk-flex-column">
                  {data.strapiGlobal.siteName}
                </Link>
              </li>
            </ul>
          </div>
        </nav>


        <nav className="navbar navbar--secondary uk-navbar-container" data-uk-navbar data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; top: 500; animation: uk-animation-slide-top">
          <div className="uk-navbar-center">
            <ul className="uk-navbar-nav uk-text-center">
              {data.allStrapiCategory.edges.map((category, i) => (
                <li key={`category__${category.node.slug}`}>
                  <Link to={`/category/${category.node.slug}`}>
                    {category.node.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

      </div>
    )}
  />
);

export default Nav;
