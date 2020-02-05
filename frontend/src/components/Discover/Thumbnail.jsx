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
        <span className="absolute-top-left">
          {" "}
          {review.tags.map(tag => (
            <Badge key={tag._id} variant="light" className="m-1">
              {tag.name}
            </Badge>
          ))}
        </span>
      </div>
      <Card.Body>
        <Card.Title>{review.title}</Card.Title>
        <blockquote>
          <Card.Text>{review.description}</Card.Text>
          <p className="blockquote-footer">[User's Name]</p>
        </blockquote>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">View more</Button>
      </Card.Footer>
    </Card>
  );
}

export default Thumbnail;
