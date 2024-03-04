import React from 'react';

import './area.css';

const Area = ({ title, children, className }) => {
  return (
    <section className={`area ${className || ''}`}>
      <div className="area__header">
        <h4>{title}</h4>
      </div>
      <div className="area__content">{children}</div>
    </section>
  );
};

export default Area;
