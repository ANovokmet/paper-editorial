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
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path>
                </svg>
              </a>
              <a className="button--plain" href={data.strapiGlobal.instagramUrl} target="_blank">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path>
                  <circle cx="14.87" cy="5.26" r="1.09"></circle>
                  <path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path>
                </svg>
              </a>
              <button
                type="button"
                className="button--plain button__menu uk-hidden@m"
                onClick={() => setOpen((t) => !t)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <rect x="2" y="4" width="16" height="1"></rect>
                  <rect x="2" y="9" width="16" height="1"></rect>
                  <rect x="2" y="14" width="16" height="1"></rect>
                </svg>
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
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path>
                    <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path>
                  </svg>
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
