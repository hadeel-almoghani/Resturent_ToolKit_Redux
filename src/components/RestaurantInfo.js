import React from 'react';
import './RestaurantInfo.css';

function RestaurantInfo(props) {
  return (
    <div className="restaurant-info">
      <div className="restaurant-description">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default RestaurantInfo;

