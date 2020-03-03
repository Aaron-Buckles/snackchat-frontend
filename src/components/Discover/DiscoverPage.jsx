import React, { useState, useEffect } from "react";
import reviewService from "../../services/reviewService";
import Gallery from "./Gallery";
import FoodTags from "../common/FoodTags";
import { useTags } from "../../customHooks/use-tags";

function DiscoverPage(props) {
  const [reviews, setReviews] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const tags = useTags();

  useEffect(() => {
    const fetchData = async () => {
      setReviews(await reviewService.getAllReviews());
    };
    fetchData();
  }, []);

  const handleTagSelect = value => {
    setSelectedTags(value);
  };

  return (
    <>
      <h1 className="brand-text text-center">Discover</h1>
      <hr />
      <FoodTags onTagSelect={handleTagSelect} tags={tags} />
      <Gallery selectedTags={selectedTags} reviews={reviews} />
    </>
  );
}

export default DiscoverPage;
