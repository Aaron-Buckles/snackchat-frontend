import React from "react";
import Masonry from "react-masonry-css";
import Thumbnail from "./Thumbnail";

function Gallery(props) {
  const thumbnails = [];

  const breakpointColumnsObj = {
    default: 2,
    1000: 1 
  };

  
  props.reviews.forEach(review => {
    if (props.selectedTags.length === 0) {
      thumbnails.push(<Thumbnail {...props} key={review._id} review={review} />);
    } else {
      if (
        review.tags.some(tag =>
          props.selectedTags.some(selectedTag => selectedTag.name === tag.name)
        )
      ) {
        thumbnails.push(<Thumbnail {...props} key={review._id} review={review} />);
      }
    }
  });

  if (thumbnails.length === 0) return <p>No reviews yet...</p>;


  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {thumbnails}
    </Masonry>
  );

  // return <Container className="grid-container">{thumbnails}</Container>;
}

export default Gallery;
