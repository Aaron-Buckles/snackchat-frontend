import React from "react";
import Masonry from "react-masonry-css";
import Thumbnail from "./Thumbnail";

function Gallery(props) {
  const thumbnails = [];

  props.reviews.forEach(review => {
    if (props.filterTags.length === 0) {
      thumbnails.push(<Thumbnail key={review._id} review={review} />);
    } else {
      if (review.tags.some(element => props.filterTags.includes(element))) {
        thumbnails.push(<Thumbnail key={review._id} review={review} />);
      }
    }
  });

  return (
    <Masonry
      breakpointCols={2}
      className="w-75 mx-auto my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {thumbnails}
    </Masonry>
  );
}

export default Gallery;
