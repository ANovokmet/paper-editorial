import React from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import Card from './card/card';


const NewsSlider = ({ articles }) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <div className="uk-position-relative uk-visible-toggle" tabIndex="-1" data-uk-slider>
        <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid pb-1">
          {articles.map((article, i) => (
            <li key={i}>{<Card article={article} />}</li>
          ))}
          {articles.map((article, i) => (
            <li key={i}>{<Card article={article} />}</li>
          ))}
        </ul>

        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          data-uk-slidenav-previous
          data-uk-slider-item="previous"
        ></a>
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          data-uk-slidenav-next
          data-uk-slider-item="next"
        ></a>
      </div>
    </div>
  );
};

export default NewsSlider;
