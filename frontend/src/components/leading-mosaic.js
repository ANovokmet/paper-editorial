import React from "react";
import Card from "./leading-card";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby";

const Articles = ({ articles }) => {
  const leftArticle = articles[0];
  const rightArticles = articles.slice(1, 5);

  return (
    <div className="uk-grid-collapse uk-grid card-grid uk-height-large@s" data-uk-grid="true">

      <div className="uk-width-1-1 uk-width-1-2@s uk-height-1-1@s uk-height-large">
        <Card article={leftArticle} />
      </div>

      <div className="uk-width-1-1 uk-width-1-2@s uk-height-1-1@s uk-grid-match uk-grid-collapse uk-grid uk-height-large" data-uk-grid="true">
        {rightArticles.map((article, i) => {
          return (
            <div className="uk-width-1-2 uk-height-small-medium" key={i}>
              <Card article={article} />
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Articles;
