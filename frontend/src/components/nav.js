import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

const Nav = () => (
  <StaticQuery
    query={graphql`
      query {
        strapiGlobal {
          siteName
        }
        strapiHomepage {
          hero {
            title
            subtitle
          }
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
              </li>
            </ul>
                <Link to="/" className="uk-link-text uk-flex-column">
                  <div className="navbar__title">{data.strapiGlobal.siteName}</div>
                  <div className="navbar__subtitle">{data.strapiHomepage.hero.subtitle}</div>
                </Link>
          </div>
        </nav>


        <nav className="navbar navbar--secondary uk-navbar-container" data-uk-navbar data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; animation: uk-animation-slide-top">
          
        <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
                <li class="uk-active">
                  <Link to="/" className="uk-link-text uk-flex-column">
                    <span data-uk-icon="home"></span>
                  </Link>
                </li> 
            </ul>
        </div>
          <div className="uk-navbar-center">
            <ul className="uk-navbar-nav uk-text-center uk-visible@m">
              {data.allStrapiCategory.edges.map((category, i) => (
                <li key={`category__${category.node.slug}`}>
                  <Link to={`/category/${category.node.slug}`}>
                    {category.node.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="uk-navbar-right uk-hidden@m">
            <a href="#" className="uk-navbar-toggle" data-uk-navbar-toggle-icon data-uk-toggle="target: #sidenav"></a>
          </div>
        </nav>
        <div id="sidenav" uk-offcanvas="flip: true" className="uk-offcanvas">
          <div className="uk-offcanvas-bar">
              <ul className="uk-nav">
                {data.allStrapiCategory.edges.map((category, i) => (
                  <li key={`category__${category.node.slug}`}>
                    <Link to={`/category/${category.node.slug}`}>
                      {category.node.name}
                    </Link>
                  </li>
                ))}
              </ul>
          </div>
      </div>
      </div>
    )}
  />
);

export default Nav;
