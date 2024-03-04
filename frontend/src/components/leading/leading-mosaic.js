import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Moment from 'react-moment';

import Tag from '../tag';
import Card, { BrowserPost } from './leading-card';
import './leading-mosaic.css';
import Pointer from '../../assets/pointer.svg';

function Primary({ article, className }) {
  return (
    <article className={`item-w ${className || ''}`}>
      <div className="image-w">
        <img className="pointer" src={Pointer} />
        <div className="item__image-w">
          <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
            <GatsbyImage
              className="card--big"
              image={article.node.image.localFile.childImageSharp.gatsbyImageData}
              alt={`Image`}
            />
          </Link>
        </div>
      </div>
      <div className="content-w">
        <div className="item__content-w">
          <div className="folder">
            <Link to={`/category/${article.node.category.slug}`} className="uk-link-reset">
              <Tag>{article.node.category.name}</Tag>
            </Link>
          </div>
          <div className="leading-post__title">
            <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
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
    </article>
  );
}

// function Secondary({ article }) {
//   return (

//   );
// }

function Articles({ articles, topArticle }) {
  const leftArticle = { node: topArticle };
  const rightArticles = [...articles.slice(0, 6)];

  return (
    <div className="leading-grid uk-height-large@s">
      {leftArticle.node && <BrowserPost article={leftArticle} className="l" />}
      <Primary article={rightArticles[0]} className="item-w--big m" />
      <Primary article={rightArticles[1]} className="item-w--big m" />
      {rightArticles.slice(2, 6).map((article, i) => (
        <Primary article={article} className={`s${i + 1} item-w--small s`} key={i} />
      ))}
    </div>
  );
}

export default Articles;
