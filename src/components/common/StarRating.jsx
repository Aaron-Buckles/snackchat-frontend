import React from "react";
import StarRatings from "react-star-ratings";

export function StarRating({ name, label, rating, changeRating, ...options }) {
  return (
    <div className="form-group">
      {label && (
        <>
          <label htmlFor={name}>{label}</label>
          <br />
        </>
      )}
      <StarRatings
        name={name}
        id={name}
        rating={rating}
        changeRating={changeRating}
        starDimension="25px"
        starSpacing="5px"
        starRatedColor="#1e88e5"
        starHoverColor="#1e88e5"
        {...options}
      />
    </div>
  );
}
