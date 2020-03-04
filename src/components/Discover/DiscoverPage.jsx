import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import FoodTags from "../common/FoodTags";

// Services
import reviewService from "../../services/reviewService";

// Interface
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Hooks
import { useTags } from "../../customHooks/use-tags";

export default function DiscoverPage() {
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
      <h1 className="brand-text text-center">
        <FontAwesomeIcon icon="search" /> Discover
      </h1>
      <hr />
      <FoodTags onTagSelect={handleTagSelect} tags={tags} />
      <hr />
      <Gallery selectedTags={selectedTags} reviews={reviews} />
    </>
  );
}
