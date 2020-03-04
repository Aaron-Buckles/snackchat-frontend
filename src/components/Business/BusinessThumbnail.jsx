import React from "react";
import Cookies from "js-cookie";

// Interface
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { ButtonWithLoading } from "../common/inputElements";
import { StarRating } from "../common/StarRating";

// Hooks
import { useRouter } from "../../customHooks/use-router";
import { useSubmit } from "../../customHooks/use-submit";

export default function BusinessThumbnail({ business }) {
  const { push } = useRouter();

  const onWriteReview = useSubmit(e => {
    Cookies.set("review_business_id", business._id, {
      expires: 1 / 48
    });
    push("/review");
  });

  return (
    <Card>
      <Card.Body>
        <Card.Title>{business.name}</Card.Title>
        <StarRating name="starRating" rating={business.starRating} />

        <Card.Text>
          <address>
            {business.address} <br /> {business.city}, {business.state},{" "}
            {business.postal_code}
          </address>
          {business.tags.map(tag => (
            <Badge key={tag._id} pill variant="primary" className="mr-1">
              {tag.name}
            </Badge>
          ))}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <ButtonWithLoading
          className="float-right"
          name="writeReview"
          text="Write a Review"
          loading={onWriteReview.loading}
          onPress={onWriteReview.exec}
          variant="success"
        />
      </Card.Footer>
    </Card>
  );
}
