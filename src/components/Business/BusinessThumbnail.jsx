import React from "react";
import Cookies from "js-cookie";

// Interface
import Card from "react-bootstrap/Card";
import { ButtonWithLoading } from "../common/inputElements";
import { StarRating } from "../common/StarRating";
import TagPills from "../common/TagPills";

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
    <Card className="mx-auto shadow-lg">
      <Card.Body>
        <Card.Title>{business.name}</Card.Title>
        <StarRating name="starRating" rating={business.starRating} />
        <TagPills tags={business.tags} />
        <Card.Text className="border-top border-bottom p-2">
          {business.address} <br /> {business.city}, {business.state}{" "}
          {business.postalCode}
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
