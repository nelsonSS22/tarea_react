import React from 'react';

const Card = ({ title, description, rating, maxGuests, type, imageUrl }) => {
  return (
    <div className="card">
        <img
        src={imageUrl}
        alt={title}
        className="card-img-top img-fluid rounded"
        style={{ maxHeight: "200px", borderRadius: "30px"}}
      />
      <div className="card-details">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-type">Type: {type}</p>
        <p className="card-max-guests">Max Guests: {maxGuests}</p>
        <p className="card-rating">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default Card;
