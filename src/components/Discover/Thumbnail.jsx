import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { StarRating } from "../common/StarRating";
import reviewService from "../../services/reviewService";
import "holderjs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useAuth } from "../../customHooks/use-auth";
import { useRouter } from "../../customHooks/use-router";
import { LikeButton } from "../common/LikeButton";

export default function Thumbnail({ key, review }) {
  const auth = useAuth();
  const { push } = useRouter();

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(review.likeCount);

  useEffect(() => {
    const fetchData = async () => {
      if (review.likes.includes(auth.user.userId)) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    };
    if (auth.user) {
      fetchData();
    }
  }, []);

  const onLike = async () => {
    try {
      await reviewService.likeReview(review._id);
      setLiked(true);
      setLikeCount(likeCount + 1);
    } catch (err) {
      toast.error(err.response.data.err);
      push("/login");
    }
  };

  const onUnlike = async () => {
    try {
      await reviewService.unlikeReview(review._id);
      setLiked(false);
      setLikeCount(likeCount - 1);
    } catch (err) {
      toast.error(err.response.data.err);
      push("/login");
    }
  };

  return (
    <Card className="mx-auto">
      <Card.Img
        variant="top"
        src={`${process.env.REACT_APP_API_URL}/${review.reviewImage}`}
      />
      <Card.Body>
        <Card.Title>{review.title}</Card.Title>
        <StarRating name="starRating" rating={review.starRating} />
        {review.tags.map(tag => (
          <Badge key={tag._id} pill variant="primary" className="mr-1 mb-2">
            {tag.name}
          </Badge>
        ))}

        <hl />

        <Card.Text className="border-top border-bottom p-2">
          {review.description}
        </Card.Text>
        <div className="d-flex justify-content-end">
          <LikeButton
            onLike={onLike}
            onUnlike={onUnlike}
            liked={liked}
            likeCount={likeCount}
          />
        </div>
      </Card.Body>
    </Card>
  );
}
