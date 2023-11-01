import React from "react";
import "./card.css";
const Card = ({ src, title, description }) => {

  return (
    <div className="mycard">
      <img alt="" src={src} />
      <h4><strong> {title}</strong> </h4>
      <p> {description}</p>
    </div>
  );
};

export default Card;
