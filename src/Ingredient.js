import React from "react";
import './Ingredient.css'
const Ingredient = ({id,title,desc}) => {
  return (
    <div className="ingdiv" >
  <div>
  <div className="id">{id}  </div>
  </div>
    
      <div className="ingdetail">
       <strong> <h4 style={{fontWeight:'bolder'}}>{title}</h4></strong>
        <p> {desc}</p>
      </div>
    </div>
  );
};

export default Ingredient;
