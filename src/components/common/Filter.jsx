import React from "react";

// Interface
import { ButtonWithLoading } from "./inputElements";

export default function BusinessFilter({ filters, setFilters, className }) {
  const toggleWithinRadius = () => {
    if (filters.mileValuesIndex >= filters.mileValues.length - 1) {
      setFilters({ ...filters, mileValuesIndex: 0 });
    } else {
      setFilters({ ...filters, mileValuesIndex: filters.mileValuesIndex + 1 });
    }
  };

  const toggleStarRating = () => {
    if (filters.starRating >= 5) {
      setFilters({ ...filters, starRating: 0 });
    } else {
      setFilters({ ...filters, starRating: filters.starRating + 1 });
    }
  };

  return (
    <>
      <ButtonWithLoading
        name="toggle-show-all-button"
        text={filters.showAll ? "Showing all" : "Showing within: "}
        onPress={() => setFilters({ ...filters, showAll: !filters.showAll })}
        type="secondary"
        className={className}
      />

      <ButtonWithLoading
        name="toggle-within-radius"
        text={`${filters.mileValues[filters.mileValuesIndex]} miles`}
        onPress={() => toggleWithinRadius()}
        type="secondary"
        visible={!filters.showAll}
        className={className}
      />

      <ButtonWithLoading
        name="toggle-star-rating"
        text={
          filters.starRating == 0
            ? "with any rating"
            : `with ${filters.starRating} star reviews`
        }
        onPress={() => toggleStarRating()}
        type="secondary"
        visible={!filters.showAll}
        className={className}
      />
    </>
  );
}
