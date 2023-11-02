import React from "react";
import './Ingredient.css'
const Ingredient = ({id,title,desc}) => {
  return (
    <div className="ingdiv" >
  <div>
  <div className="id">{id}  </div>
  </div>
    
      <div className="ingdetail">
       <strong> <span style={{fontWeight:'bolder'}}>{title}</span></strong>
        <p> {desc}</p>
      </div>
    </div>
  );
};

export default Ingredient;
