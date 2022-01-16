import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Moment from "react-moment";

const RecentPost = ({ article }) => {
  return (
    <div className="recent-post uk-flex">
      <div className="recent-post__thumbnail">
        <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
          <GatsbyImage
            image={article.node.image.localFile.childImageSharp.gatsbyImageData} alt="" />
        </Link>
      </div>
      <div className="recent-post__content uk-flex-1">
        <div className="recent-post__title">
          <Link to={`/article/${article.node.slug}`} className="uk-link-text">
            {article.node.title}
          </Link>
        </div>
        <div className="post-info">
          <span className="post-info__author">
            {article.node.author ? article.node.author.name : 'Autor'}
          </span>
          <span className="post-info__separator">-</span>
          <span className="post-info__date">
            <Moment format="LL" locale="hr">{article.node.published_at}</Moment>
          </span>
        </div>
      </div>
    </div>
  )
}

export default RecentPost;