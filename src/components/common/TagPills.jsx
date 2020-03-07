import React from "react";

// Interface
import Badge from "react-bootstrap/Badge";

export default function TagPills({ tags }) {
  return tags.map(tag => (
    <Badge key={tag._id} pill variant="primary" className="mr-1 mb-2">
      {tag.name}
    </Badge>
  ));
}
