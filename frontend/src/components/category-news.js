import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Area from '../components/area';
import RecentPost from "./recent-post";
import Moment from "react-moment";

const LeadingPost = ({ article }) => {
  return (
    <div className="leading-post">
      <div className="leading-post__thumbnail">
        <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
          <GatsbyImage className="uk-width-1-1"
            image={article.node.image.localFile.childImageSharp.gatsbyImageData} alt="" />
        </Link>
      </div>
      <div className="leading-post__content">
        <Link to={`/category/${article.node.category.slug}`} className="uk-link-reset">
          <div className="leading-post__category leading-post__category--red">
            {article.node.category.name}
          </div>
        </Link>
        <div className="leading-post__title">
          <Link to={`/article/${article.node.slug}`} className="uk-link-text">
            {article.node.title}
          </Link>
        </div>
        <div className="post-info uk-flex">
          <div className="post-info__author">
            {article.node.author ? article.node.author.name : 'Autor'}
          </div>
          <span className="post-info__separator">-</span>
          <div className="post-info__date">
            <Moment format="LL" locale="hr">{article.node.published_at}</Moment>
          </div>
        </div>
      </div>
    </div>
  )
}

const CategoryNews = ({ category, articles }) => {
  return (
    <Area title={category.name}>
      <LeadingPost article={articles[0]} />
      {articles.slice(1).map((article, i) => (<RecentPost article={article} key={i} />))}
    </Area>
  )
}

export default CategoryNews;