import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import Moment from "react-moment";
import { Link } from 'gatsby';

const DetailPost = ({ article }) => {
  return (
    <div className="detail-post uk-flex">
      <div className="detail-post__thumbnail">

        <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
          <GatsbyImage
            image={article.node.image.localFile.childImageSharp.gatsbyImageData} alt="" />
        </Link>
      </div>
      <div className="detail-post__content uk-flex-1">
        <div className="detail-info uk-flex uk-flex-between">
          <div className="detail-info__author">
            <span data-uk-icon="pencil"></span>
            {article.node.author ? article.node.author.name : 'Autor'}
          </div>
          <div className="detail-info__date">
            <span data-uk-icon="clock"></span>
            <Moment format="DD/MM/YYYY">{article.published_at}</Moment>
          </div>
        </div>
        <div className="detail-post__title">
          <Link to={`/article/${article.node.slug}`} className="uk-link-text">
            {article.node.title}
          </Link>
        </div>
        <div className="detail-post__content">
          {article.node.description}
        </div>
      </div>
    </div>
  )
}

export default DetailPost;