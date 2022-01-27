import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import Moment from "react-moment";
import { Link } from 'gatsby';

const DetailPost = ({ article }) => {
  return (
    <div className="detail-post uk-flex">
      <div className="detail-post__thumbnail">

        <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
          {article.node.image.localFile && (<GatsbyImage
            image={article.node.image.localFile.childImageSharp.gatsbyImageData} alt="" />)}
        </Link>
      </div>
      <div className="detail-post__content uk-flex-1">
        <div className="detail-post__title">
          <Link to={`/article/${article.node.slug}`} className="uk-link-text">
            {article.node.title}
          </Link>
        </div>
        <div className="detail-info">
          <span className="detail-info__author">
            {article.node.author ? article.node.author.name : 'Autor'}
          </span>
          <span className="detail-info__separator">-</span>
          <span className="detail-info__date">
            <Moment format="LL." locale="hr">{article.node.published_at}</Moment>
          </span>
        </div>
        <div className="detail-post__content">
          {article.node.description}
        </div>
      </div>
    </div>
  )
}

export default DetailPost;