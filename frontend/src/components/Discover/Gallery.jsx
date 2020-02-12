import React from "react";
import Masonry from "react-masonry-css";
import Container from "react-bootstrap/Container";
import Thumbnail from "./Thumbnail";

function Gallery({ selectedTags, reviews }) {
  const thumbnails = [];

  reviews.forEach(review => {
    if (selectedTags.length === 0) {
      thumbnails.push(<Thumbnail key={review._id} review={review} />);
    } else {
      if (
        review.tags.some(tag =>
          selectedTags.some(selectedTag => selectedTag.name === tag.name)
        )
      ) {
        thumbnails.push(<Thumbnail key={review._id} review={review} />);
      }
    }
  });

  return <Container className="grid-container">{thumbnails}</Container>;
}

export default Gallery;
