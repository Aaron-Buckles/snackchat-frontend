import React, { useState, useEffect } from "react";
import "holderjs"; // What is this??

// Services
import reviewService from "../../services/reviewService";

// Interface
import Card from "react-bootstrap/Card";
import TagPills from "../common/TagPills";
import { toast } from "react-toastify";
import { StarRating } from "../common/StarRating";
import { LikeButton } from "../common/LikeButton";

// Hooks
import { useAuth } from "../../customHooks/use-auth";
import { useRouter } from "../../customHooks/use-router";

import userService from "../../services/userService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Thumbnail({ review }) {
  const auth = useAuth();
  const { push } = useRouter();

  const [liked, setLiked] = useState(false);
  const [preferred, setPreferred] = useState(false);
  const [likeCount, setLikeCount] = useState(review.likeCount);

  useEffect(() => {
    async function fetchData() {
      const userDetails = await userService.getUserById(auth.user.userId);
      var tagsIDs = review.tags.map(tag => tag._id);
      setPreferred(
        userDetails.preferences.some(p => tagsIDs.indexOf(p._id) >= 0)
      );
    }
    if (auth.user) {
      fetchData();
    }
  }, []);

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
    <Card className="mx-auto shadow-lg">
      <Card.Img
        variant="top"
        src={`${process.env.REACT_APP_API_URL}/${review.reviewImage}`}
      />
      <Card.Body>
        <Card.Title>{review.title}</Card.Title>
        <p className="text-muted">
          for {review.businessId.name} in {review.businessId.city}
        </p>
        <StarRating name="starRating" rating={review.starRating} />
        <TagPills tags={review.tags} />
        <Card.Text className="border-top border-bottom p-2">
          {review.description}
        </Card.Text>
        <span className="blockquote-footer">{review.author.name}</span>
        <div className="d-flex justify-content-between align-items-center">
          {preferred ? (
            <FontAwesomeIcon size="2x" color="red" icon={["far", "heart"]} />
          ) : (
            <span />
          )}
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
