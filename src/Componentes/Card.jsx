import React from 'react';

const Card = ({ superHost, title, description, rating, maxGuests, type, beds, imageUrl }) => {
  return (
  <div className="card">
        <img
        src={imageUrl}
        alt={title}
        className="card-img-top img-fluid rounded"
        style={{ maxHeight: "350px", borderRadius: "30px"}}
      />
      <div className="card-details">
        <p className="card-description">{superHost}</p>
        <p className="card-description">{description}</p>
        <p className="card-type">{type}beds{beds}</p>
        <p className="card-max-guests">Max Guests: {maxGuests}</p>
        <p className="card-rating"> 
        <span className="material-symbols-outlined yellow-icon">
        grade
        </span> {rating}</p>
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
