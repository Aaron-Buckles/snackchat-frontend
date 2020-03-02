import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Cookies from "js-cookie";

function BusinessThumbnail(props) {
  function handleWriteReview(e) {
    e.preventDefault();
    Cookies.set("review_business_id", props.business._id, {
      expires: 1 / 48
    });
    props.history.push("/review");
  }

  return (
    <Card style={{ width: "100%" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <Card.Img variant="top" src="https://www.fillmurray.com/640/360" />
        </div>
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>{props.business.name}</Card.Title>
            <Card.Text>
              <address>
                {props.business.address} <br />
                {props.business.city}, {props.business.state},{" "}
                {props.business.postal_code}
              </address>
            </Card.Text>
            <Card.Text>Ratings: {props.business.starRating}</Card.Text>
            <h4>
              {props.business.tags.map(tag => (
                <Badge key={tag._id} pill variant="primary" className="m-1">
                  {tag.name}
                </Badge>
              ))}
            </h4>
            <Button variant="success" onClick={handleWriteReview}>
              Write a review
            </Button>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default BusinessThumbnail;
