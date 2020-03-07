import React from "react";
import BusinessThumbnail from "./BusinessThumbnail";

// Interface
import Masonry from "react-masonry-css";
import { Loader } from "../common/Loader";

export default function BusinessGallery({ businesses }) {
  const breakpointColumnsObj = {
    default: 2,
    1000: 1
  };

  const businessesToDisplay = businesses.list.map(business => (
    <BusinessThumbnail
      key={business._id}
      business={business}
    ></BusinessThumbnail>
  ));

  if (businesses.list.length === 0) return <Loader />;

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {businessesToDisplay}
    </Masonry>
  );
}
