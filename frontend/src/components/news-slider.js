import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";


const HotNews = ({ article }) => {
  return (
    <div className="hot-news__item">
      <div className="hot-news__thumbnail">
        <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
          <GatsbyImage
            image={article.node.image.localFile.childImageSharp.gatsbyImageData} alt="" />
        </Link>
      </div>
      <div className="hot-news__content">
        <div className="hot-news__title">
          <Link to={`/article/${article.node.slug}`} className="uk-link-text">
            {article.node.title}
          </Link>
        </div>
        <div className="post-info uk-flex uk-flex-between">
          <div className="post-info__author">
            <span data-uk-icon="pencil"></span>{article.node.author ? article.node.author.name : 'Unknown'}
          </div>
          <div className="post-info__date">
            <span data-uk-icon="clock"></span>
            {article.node.created_at}
          </div>
        </div>
      </div>
    </div>
  )
}

const NewsSlider = ({ articles }) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <div className="uk-position-relative uk-visible-toggle" tabIndex="-1" data-uk-slider>

        <ul className="uk-slider-items uk-child-width-1-2 uk-grid uk-grid-small">
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