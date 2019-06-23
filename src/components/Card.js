import React from "react";
import "../components/Card.css"
const Card = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt='Card' src = {("../../src/images")}/>
   
    </div>
  </div>
);

export default Card;