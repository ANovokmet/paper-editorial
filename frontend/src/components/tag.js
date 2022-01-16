import React from "react";

const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
];

const Tag = ({ children }) => {
    const index = children.charCodeAt(0);
    const color = colors[index % colors.length];
    return (
        <div className="leading-post__category tag" style={{ backgroundColor: color }}>
            {children}
        </div>
    );
}

export default Tag;