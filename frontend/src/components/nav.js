import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import logo from "../assets/logo.png"

const Nav = () => {

  const items = [
    {
      name: 'Ponosna škola',
      href: '/category/ponosna-skola'
    },
    {
      name: 'Više od škole',
      href: '/category/vise-od-skole'
    },
    {
      name: 'Obilježavamo',
      href: '/category/obiljezavamo'
    },
    {
      name: 'Putujemo i učimo',
      href: '/category/putujemo-i-ucimo'
    },
    {
      name: 'Literarni kutak',
      href: '/category/literarni-kutak'
    },
    {
      name: 'Slobodno vrijeme',
      href: '/category/slobodno-vrijeme'
    },
    {
      name: 'Impressum',
      href: '/impressum'
    }
  ];

  return (
    <StaticQuery
      query={graphql`
      query {
        strapiGlobal {
          siteName
          facebookUrl
          instagramUrl
          youtubeUrl
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
            <div className="uk-navbar-left">
            </div>
            <div className="uk-navbar-center">
              <ul className="uk-navbar-nav">
                <li>
                </li>
              </ul>
              <Link to="/" className="uk-link-text uk-flex-column">
                <img className="navbar__image" src={logo} style={{ height: '60px' }} />
                <div className="navbar__title">{data.strapiGlobal.siteName}</div>
                <div className="navbar__subtitle">{data.strapiHomepage.hero.subtitle}</div>
              </Link>
            </div>
            <div className="uk-navbar-right social" style={{ height: '85px' }}>
              <div>
                <a href={data.strapiGlobal.facebookUrl} target="_blank" data-uk-icon="icon: facebook"></a>
              </div>
              <div>
                <a href={data.strapiGlobal.instagramUrl} target="_blank" data-uk-icon="icon: instagram"></a>
              </div>
            </div>
          </nav>


          <nav className="navbar navbar--secondary uk-navbar-container" data-uk-navbar data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; animation: uk-animation-slide-top">

            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li className="uk-active">
                  <Link to="/" className="uk-link-text uk-flex-column">
                    <span data-uk-icon="home"></span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="uk-navbar-center">
              <ul className="uk-navbar-nav uk-text-center uk-visible@m">
                {items.map((item, i) => (
                  <li key={i}>
                    <Link to={item.href}>
                      {item.name}
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
                {items.map((item, i) => (
                  <li key={i}>
                    <Link to={item.href}>
                      {item.name}
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
}

export default Nav;
