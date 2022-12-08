import React from 'react';
import './ramenedit.css';
import { Link } from "react-router-dom";

const RamenEdit = ({item}) => {

    return (
      <div className="container">
    <div className="card">
      <div className="card-header">
        <div className="overlay"></div>
          <img src={item.img} alt={item.name + ' Image'}></img>
      </div>
      <div className="card-body">
        <h2 className="ramenName">{item.name}</h2>
        <p className="ramenSpice">🔥 {item.spice}</p>
        <h3 className="ramenPrice">${item.price}</h3>
        <div className="btn6">
        <Link to={`/edit/${item.id}`}>Edit</Link> 
        </div>
      </div>
    </div>
  </div>
    )
  }

  export default RamenEdit