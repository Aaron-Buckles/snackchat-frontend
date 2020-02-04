import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "holderjs";

function Thumbnail(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">View more</Button>
      </Card.Body>
    </Card>
  );
}

export default Thumbnail;
