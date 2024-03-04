import React from 'react';

import Area from './area/area';
import Card from './card/card';
import RecentPost from './post/post';

function CategoryNews({ category, articles }) {
  return (
    <Area title={category.name} className="area--grow">
      <Card article={articles[0]} className="mb-2" />
      {articles.slice(1).map((article, i) => (
        <RecentPost article={article} key={i} />
      ))}
    </Area>
  );
}

export default CategoryNews;
