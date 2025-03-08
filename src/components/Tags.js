import React from "react";
import "../styles/Annonce.css";

const Tags = ({ tags }) => (
  tags?.length > 0 && (
    <div className="tags">
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  )
);

export default Tags;


