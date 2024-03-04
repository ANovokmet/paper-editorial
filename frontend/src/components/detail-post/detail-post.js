import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Moment from 'react-moment';
import { Link } from 'gatsby';

import './detail-post.css';

function DetailPost({ article }) {
  return (
    <div className="detail-post">
      <div className="detail-post__thumbnail">
        <Link to={`/article/${article.node.slug}`} className="uk-link-reset stretched-link">
          {article.node.image.localFile && (
            <GatsbyImage
              style={{ height: '100%' }}
              image={article.node.image.localFile.childImageSharp.gatsbyImageData}
              alt=""
            />
          )}
        </Link>
      </div>
      <div className="detail-post__content">
        <div className="detail-post__title">
          <Link to={`/article/${article.node.slug}`} className="uk-link-text">
            {article.node.title}
          </Link>
        </div>
        {article.node.description}
      </div>
      <div className="detail-info">
        <span className="detail-info__author">{article.node.author ? article.node.author.name : 'Autor'}</span>
        <span className="detail-info__date">
          <Moment format="LL." locale="hr">
            {article.node.article_published_at || article.node.published_at}
          </Moment>
        </span>
      </div>
    </div>
  );
}

export default DetailPost;
