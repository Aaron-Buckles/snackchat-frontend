import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "holderjs";
import { backendURL } from "../../config.json";

function Thumbnail({ review }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`${backendURL}/${review.reviewImage}`} />
      <Card.Body>
        <Card.Title>{review.title}</Card.Title>
        <Card.Text>{review.description}</Card.Text>
        <Button variant="primary">View more</Button>
      </Card.Body>
    </Card>
  );
}

export default Thumbnail;
