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

  return (
    <>
      <ButtonWithLoading
        name="toggle-show-all-button"
        text={filters.showAll ? "Showing All" : "Showing Within: "}
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
    </>
  );
}
