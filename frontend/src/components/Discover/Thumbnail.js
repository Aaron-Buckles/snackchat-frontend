import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "holderjs";
import { backendURL } from "../../config.json";

function Thumbnail({ review }) {
  return (
    <Card style={{ width: "18rem" }}>
      <div>
        <Card.Img variant="top" src={`${backendURL}/${review.reviewImage}`} />
        {review.tags.map(tag => (
          <Badge
            key={tag._id}
            pill
            variant="light"
            className="absolute-top-left"
          >
            {tag.name}
          </Badge>
        ))}
      </div>
      <Card.Body>
        <Card.Title>{review.title}</Card.Title>
        <Card.Text>{review.description}</Card.Text>
        <Button variant="primary">View more</Button>
      </Card.Body>
    </Card>
  );
}

export default Thumbnail;
