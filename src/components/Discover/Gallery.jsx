import React from "react";
import Masonry from "react-masonry-css";
import Thumbnail from "./Thumbnail";
import { Loader } from "../common/Loader";

export default function Gallery({ selectedTags, reviews }) {
  // const thumbnailsToDisplay = [];

  const breakpointColumnsObj = {
    default: 2,
    1000: 1
  };

  reviews.forEach(review => console.log(review));

  const thumbnailsToDisplay = reviews
    .filter(
      review =>
        selectedTags.length === 0 ||
        selectedTags.every(selectedTag =>
          review.tags.some(tag => tag._id === selectedTag._id)
        )
    )
    .map(review => <Thumbnail key={review._id} review={review} />);

  if (thumbnailsToDisplay.length === 0) return <Loader />;

  let x = [<Thumbnail review={reviews[0]} />];

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {thumbnailsToDisplay}
    </Masonry>
  );
}
