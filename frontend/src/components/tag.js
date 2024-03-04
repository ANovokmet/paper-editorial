import React from 'react';

import './tag.css';

const colors = ['#ff8ac5', '#2ac3a2', '#00b3f4', '#ff8a50', '#9059ff'];

const Tag = ({ children }) => {
  const index = children.charCodeAt(0);
  const color = colors[index % colors.length];
  return (
    <div className="leading-post__category tag" style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

export default Tag;
