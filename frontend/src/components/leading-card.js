import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Moment from "react-moment";
import Tag from "./tag";

const LeadingPost = ({ article }) => {
  return (
    <div className="leading-post card--big">
      <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
        <div className="leading-post__thumbnail  card--big">
          <GatsbyImage
            className="card--big"
            image={article.node.image.localFile.childImageSharp.gatsbyImageData} 
            alt={`Image`} />
        </div>
      </Link>
      <div className="leading-post__content">
        <Link to={`/category/${article.node.category.slug}`} className="uk-link-reset">
          <Tag>{article.node.category.name}</Tag>
        </Link>
        <div className="leading-post__title">
          <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
            {article.node.title}
          </Link>
        </div>
        <div className="post-info">
          <span className="post-info__author">
            {article.node.author ? article.node.author.name : 'Autor'}
          </span>
          <span className="post-info__separator">-</span>
          <span className="post-info__date">
            <Moment format="LL" locale="hr">{article.node.created_at}</Moment>
          </span>

        </div>
      </div>
    </div>
  )
}

export default LeadingPost;
