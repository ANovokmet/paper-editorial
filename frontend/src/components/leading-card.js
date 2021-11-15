import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const colors = [
  "red",
  "green",
  "blue",
  "orange",
  "purple",
];

const Tag = ({ children }) => {
  const index = children.charCodeAt(0);
  const color = colors[index % colors.length];
  return (
    <div className="leading-post__category" style={{ backgroundColor: color }}>
      {children}
    </div>
  );
}


const LeadingPost = ({ article }) => {
  return (
    <div className="leading-post card--big">
      <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
        <div className="leading-post__thumbnail  card--big">
          <GatsbyImage
            className="card--big"
            image={article.node.image.localFile.childImageSharp.gatsbyImageData}
            alt={`Hero image`} />
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
        <div className="post-info uk-flex uk-flex-between">
          <div className="post-info__author">
            <span data-uk-icon="pencil"></span>{article.node.author.name}
          </div>
          <div className="post-info__date">
            <span data-uk-icon="clock"></span>{article.node.created_at}
          </div>

        </div>
      </div>
    </div>
  )
}

export default LeadingPost;
