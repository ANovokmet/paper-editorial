import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Moment from 'react-moment';

import './post.css';

const RecentPost = ({ article, video }) => {
  return (
    <div className="post uk-flex">
      <div className="post__thumbnail">
        <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
          {video ? (
            <div className="play-icon">
              <span class="data-uk-icon uk-icon">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"></polygon>
                  <circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"></circle>
                </svg>
              </span>
            </div>
          ) : (
            ''
          )}
          <GatsbyImage
            style={{ height: '100px' }}
            image={article.node.image.localFile.childImageSharp.gatsbyImageData}
            alt=""
          />
        </Link>
      </div>
      <div className="post__content uk-flex-1">
        <div className="post__title text-ellipsis">
          <Link to={`/article/${article.node.slug}`} className="uk-link-text stretched-link">
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
};

export default RecentPost;
