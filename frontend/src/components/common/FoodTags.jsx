import React from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function FoodTags({ selectedTags, onTagSelect, tags }) {
  return (
    <div className="mb-3">
      <ToggleButtonGroup
        className="d-flex justify-content-around"
        type="checkbox"
        value={selectedTags}
        onChange={onTagSelect}
      >
        {tags.map(tag => (
          <ToggleButton
            key={tag._id}
            className="mx-1"
            variant="outline-success"
            value={tag}
          >
            {tag.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}

export default FoodTags;
