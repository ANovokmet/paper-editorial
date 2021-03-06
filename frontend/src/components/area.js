import React from "react";

const Area = ({ title, children }) => {
  return (
    <div className="area">
      <h4 className="uk-heading-divider">
        {title}
      </h4>
      {children}
    </div>
  )
}

export default Area;