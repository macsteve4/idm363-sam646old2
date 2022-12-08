import React from 'react';
import './ramenlisting.css';
import { Link } from "react-router-dom";

const RamenListing = ({item}) => {

    return (
      <div className="container">
    <div className="card">
      <div className="card-header">
        <div className="overlay"></div>
          <button className="view-item"><Link to={`/view/${item.id}`}>View Item</Link></button>
          <img src={item.img} alt={item.name + ' Image'}></img>
      </div>
      <div className="card-body">
        <h2 className="ramenName">{item.name}</h2>
        <p className="ramenSpice">🔥 {item.spice}</p>
        <h3 className="ramenPrice">${item.price}</h3>
        <div className="btn6">
          <a href="#">Add To Cart</a>
        </div>
      </div>
    </div>
  </div>
    )
  }

  export default RamenListing