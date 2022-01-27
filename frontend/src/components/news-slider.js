import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import Moment from "react-moment";

const HotNews = ({ article }) => {
  return (
    <div className="hot-news__item">
      <div className="hot-news__thumbnail">
        <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
          <GatsbyImage
          className="uk-width-1-1"
            image={article.node.image.localFile.childImageSharp.gatsbyImageData} alt="" />
        </Link>
      </div>
      <div className="hot-news__content">
        <div className="hot-news__title">
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
            <Moment format="LL." locale="hr">{article.node.created_at}</Moment>
          </span>
        </div>
      </div>
    </div>
  )
}

const NewsSlider = ({ articles }) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <div className="uk-position-relative uk-visible-toggle" tabIndex="-1" data-uk-slider>

        <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid">
          {articles.map((article, i) => (
            <li key={i}>
              {<HotNews article={article} />}
            </li>
          ))}
          {articles.map((article, i) => (
            <li key={i}>
              {<HotNews article={article} />}
            </li>
          ))}
        </ul>

        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>

      </div>
    </div>
  )
}

export default NewsSlider;