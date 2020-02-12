import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import "holderjs";

function Thumbnail({ review }) {
  return (
    <Card>
      <div>
        <Card.Img
          variant="top"
          src={`${process.env.REACT_APP_API_URL}/${review.reviewImage}`}
        />
        <span className="absolute-top-left">
          {review.tags.map(tag => (
            <Badge key={tag._id} variant="light" className="m-1">
              {tag.name}
            </Badge>
          ))}
        </span>
      </div>
      <Card.Body>
        <Card.Title className="brand-text">{review.title}</Card.Title>
        <blockquote>
          <Card.Text>{review.description}</Card.Text>
          <p className="blockquote-footer">{review.author.name}</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Thumbnail;
