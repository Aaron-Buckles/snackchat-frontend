import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import FoodTags from "../common/FoodTags";
import Filter from "../common/Filter";

// Interface
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonWithLoading } from "../common/inputElements";

// Hooks
import { useTags } from "../../customHooks/use-tags";
import { useRouter } from "../../customHooks/use-router";
import { useReviews } from "../../customHooks/use-reviews";

export default function DiscoverPage() {
  // Filters
  const [filters, setFilters] = useState({
    showAll: false,
    mileValues: [1, 5, 10, 25, 50, 100, 500],
    mileValuesIndex: 1,
    starRating: 0
  });

  const [selectedTags, setSelectedTags] = useState([]);
  const tags = useTags();
  const { push } = useRouter();
  const reviews = useReviews(
    filters.showAll ? 0 : filters.mileValues[filters.mileValuesIndex]
  );

  const handleTagSelect = value => {
    setSelectedTags(value);
  };

  return (
    <>
      <h1 className="brand-text text-center">
        <FontAwesomeIcon icon="search" /> Discover
      </h1>
      <hr />
      <Container className="mb-3 d-flex horizontal-scroll">
        <ButtonWithLoading
          name="write-review-button"
          text="Write Review"
          onPress={() => push("/review")}
          className="mr-4 my-1"
        />
        <Filter
          filters={filters}
          setFilters={setFilters}
          className="mr-2 my-1"
        />
      </Container>
      <hr />
      <FoodTags onTagSelect={handleTagSelect} tags={tags} />
      <hr />
      <Gallery
        selectedTags={selectedTags}
        reviews={
          filters.starRating === 0
            ? reviews.list
            : reviews.list.filter(review => {
                return review.starRating === filters.starRating;
              })
        }
      />
    </>
  );
}
