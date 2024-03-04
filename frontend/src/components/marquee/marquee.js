import React from 'react';
import { Link } from 'gatsby';

import './marquee.css';

function Marquee({ articles }) {
  articles = articles.slice(0, 8);

  return (
    <nav className="marquee">
      <div className="marquee__content">
        {articles.map((article, i) => (
          <Link to={`/article/${article.node.slug}`} className="uk-link-reset" key={i}>
            <span className="marquee__highlight">// {article.node.category.name} //</span> {article.node.title}
          </Link>
        ))}
      </div>
      <div className="marquee__content" aria-hidden="true">
        {articles.map((article, i) => (
          <Link to={`/article/${article.node.slug}`} className="uk-link-reset" key={i}>
            <span className="marquee__highlight">// {article.node.category.name} //</span> {article.node.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Marquee;
