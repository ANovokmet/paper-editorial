import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Moment from 'react-moment';

import './card.css';

function Card({ article, className }) {
  return (
    <div className={`card ${className || ''}`}>
      <div className="card__image">
        <Link to={`/article/${article.node.slug}`} className="uk-link-reset stretched-link">
          <GatsbyImage
            className="uk-width-1-1"
            image={article.node.image.localFile.childImageSharp.gatsbyImageData}
            alt=""
          />
        </Link>
      </div>
      <div className="card__content">
        <div className="hot-news__title">
          <Link to={`/article/${article.node.slug}`} className="uk-link-text">
            {article.node.title}
          </Link>
        </div>
        <div className="post-info">
          <span className="post-info__author">{article.node.author ? article.node.author.name : 'Autor'}</span>
          <span className="post-info__date">
            <Moment format="LL." locale="hr">
              {article.node.article_published_at || article.node.published_at}
            </Moment>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
