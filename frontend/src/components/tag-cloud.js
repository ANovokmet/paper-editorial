import Area from './area/area';
import RecentPost from './post/post';
import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';

const TagCloud = () => {
  const { articles } = useStaticQuery(graphql`
    query {
      articles: allStrapiArticle {
        edges {
          node {
            tags {
              Name
              slug
            }
          }
        }
      }
    }
  `);

  const bannedWords = ['Featured', 'Hot', 'Top', 'Arhiva'];
  const words = {};
  let maxWeight = 1;
  const maxFontSize = 50;
  const minFontSize = 10;
  for (const article of articles.edges) {
    for (const tag of article.node.tags) {
      if (!bannedWords.includes(tag.Name)) {
        if (!words[tag.slug]) {
          words[tag.slug] = {
            name: tag.Name,
            slug: tag.slug,
            weight: 0,
          };
        }
        words[tag.slug].weight++;
        if (words[tag.slug].weight > maxWeight) {
          maxWeight = words[tag.slug].weight;
        }
      }
    }
  }

  for (const slug in words) {
    const word = words[slug];
    word.fontSize = Math.round((maxFontSize - minFontSize) * (word.weight / maxWeight) + minFontSize);
  }

  return (
    <Area title="Oblak oznaka">
      <div className="word-cloud">
        {Object.values(words).map((word, i) => (
          <Link to={`tag/${word.slug}`} key={i} className="uk-link-muted">
            <div className="word-cloud__word" style={{ fontSize: word.fontSize }}>
              {word.name}
            </div>
          </Link>
        ))}
      </div>
    </Area>
  );
};

export function TagNav() {
  const { articles } = useStaticQuery(graphql`
    query {
      articles: allStrapiArticle {
        edges {
          node {
            tags {
              Name
              slug
            }
          }
        }
      }
    }
  `);

  const bannedWords = ['Featured', 'Hot', 'Top', 'Arhiva'];
  const words = {};
  let maxWeight = 1;
  const maxFontSize = 50;
  const minFontSize = 10;
  for (const article of articles.edges) {
    for (const tag of article.node.tags) {
      if (!bannedWords.includes(tag.Name)) {
        if (!words[tag.slug]) {
          words[tag.slug] = {
            name: tag.Name,
            slug: tag.slug,
            weight: 0,
          };
        }
        words[tag.slug].weight++;
        if (words[tag.slug].weight > maxWeight) {
          maxWeight = words[tag.slug].weight;
        }
      }
    }
  }

  for (const slug in words) {
    const word = words[slug];
    word.fontSize = Math.round((maxFontSize - minFontSize) * (word.weight / maxWeight) + minFontSize);
  }

  const sorted = Object.values(words);
  sorted.sort((a, b) => b.weight - a.weight);

  return (
    <nav className="tags-nav">
      <div className="tags-nav__label">Oznake:</div>
      {sorted.map((word, i) => (
        <Link className="button--rounded" to={`tag/${word.slug}`} key={i}>
          {word.name} ({word.weight})
        </Link>
      ))}
    </nav>
  );
}

export default TagCloud;
