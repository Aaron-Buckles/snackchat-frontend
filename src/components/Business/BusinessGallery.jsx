import React from "react";
import Masonry from "react-masonry-css";
import BusinessThumbnail from "./BusinessThumbnail";

function BusinessGallery(props) {
  const businesses = [];

  props.businesses.forEach(business => {
    businesses.push(
      <BusinessThumbnail {...props} business={business}></BusinessThumbnail>
    );
  });

  if (businesses.length === 0) return <p>No businesses yet...</p>;

  return <div>{businesses}</div>;
}

export default BusinessGallery;
