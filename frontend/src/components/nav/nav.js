import React, { useState } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import logo from '../../assets/logo.png';
import './nav.css';

const Nav = () => {
  const items = [
    {
      name: 'Naslovnica',
      href: '/',
    },
    {
      name: 'Ponosna škola',
      href: '/category/ponosna-skola',
    },
    {
      name: 'Više od škole',
      href: '/category/vise-od-skole',
    },
    {
      name: 'Događajnica',
      href: '/category/dogadajnica',
    },
    {
      name: 'Putujemo i učimo',
      href: '/category/putujemo-i-ucimo',
    },
    {
      name: 'Literarni kutak',
      href: '/category/literarni-kutak',
    },
    {
      name: 'Slobodno vrijeme',
      href: '/category/slobodno-vrijeme',
    },
    {
      name: 'Impressum',
      href: '/impressum',
    },
  ];

  const [open, setOpen] = useState(false);

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
        <div className="navbars">
          <nav className="navbar navbar--primary uk-navbar-container uk-container mb-2">
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li></li>
              </ul>
              <Link to="/" className="uk-link-text navbar-brand">
                <img className="navbar__image" src={logo} style={{ height: '60px' }} />
                <div className="flex-col">
                  <div className="navbar__title">{data.strapiGlobal.siteName}</div>
                  <div className="navbar__subtitle">{data.strapiHomepage.hero.subtitle}</div>
                </div>
              </Link>
            </div>
            <div className="uk-navbar-center"></div>
            <div className="uk-navbar-right social">
              <a className="button--plain" href={data.strapiGlobal.facebookUrl} target="_blank">
                <span data-uk-icon="icon: facebook"></span>
              </a>
              <a className="button--plain" href={data.strapiGlobal.instagramUrl} target="_blank">
                <span data-uk-icon="icon: instagram"></span>
              </a>
              <button
                type="button"
                className="button--plain button__menu uk-hidden@m"
                onClick={() => setOpen((t) => !t)}
              >
                <span data-uk-icon="icon: menu"></span>
              </button>
            </div>
          </nav>

          <nav className="navbar navbar--secondary uk-container uk-visible@s">
            <div className="uk-navbar-center">
              <ul className="navbar-nav uk-text-center">
                {items.map((item, i) => (
                  <li key={i}>
                    <Link className="button--rounded" to={item.href}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div id="sidenav" className={`uk-offcanvas uk-hidden@m ${open && 'uk-open'}`}>
            <div className="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide sidenav">
              <div className="sidenav__header">
                <button type="button" className="button--plain" onClick={() => setOpen(false)}>
                  <span data-uk-icon="icon: close"></span>
                </button>
              </div>
              <div className="sidenav__items">
                {items.map((item, i) => (
                  <Link to={item.href} className="button--rounded sidenav__item" key={i} onClick={() => setOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Nav;
