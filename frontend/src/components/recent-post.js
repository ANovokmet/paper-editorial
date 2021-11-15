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
        <div className="post-info uk-flex uk-flex-between">
          <div className="post-info__author">
            <span data-uk-icon="pencil"></span>{article.node.author.name}
          </div>
          <div className="post-info__date">
            <span data-uk-icon="clock"></span>
            <Moment format="MMM Do YYYY">{article.node.published_at}</Moment>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentPost;