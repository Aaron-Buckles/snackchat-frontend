import React from "react";
import Masonry from "react-masonry-css";
import Thumbnail from "./Thumbnail";

function Gallery(props) {
  const thumbnails = [];

  props.posts.forEach(post => {
    if (props.filterTags.length == 0) {
      thumbnails.push(
        <Thumbnail
          title={post.title}
          description={post.description}
          image={post.image}
          key={post._id}
        />
      );
    } else {
      if (post.tags.some(element => props.filterTags.includes(element))) {
        thumbnails.push(
          <Thumbnail
            title={post.title}
            description={post.description}
            image={post.image}
            key={post._id}
          />
        );
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
