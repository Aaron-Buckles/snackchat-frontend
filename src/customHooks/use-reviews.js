import { useState, useEffect, useCallback } from "react";
import { usePosition } from "./use-position";

// Services
import reviewService from "../services/reviewService";

export const useReviews = (withinRadius = 0, limit = 20) => {
  const { latitude, longitude, error: positionError } = usePosition();
  const [list, setList] = useState([]);

  const fetch = useCallback(() => {
    if (latitude && longitude && !positionError && withinRadius) {
      return reviewService
        .getReviewsWithinRadius(latitude, longitude, withinRadius, limit)
        .then(reviews => setList(reviews));
    } else if (!withinRadius) {
      return reviewService.getAllReviews().then(reviews => setList(reviews));
    } else {
      setList([]);
    }
  }, [latitude, longitude, withinRadius, limit]);

  useEffect(() => {
    fetch();
  }, [latitude, longitude, withinRadius, limit]);

  const post = reviewService.postReview;
  return { list, fetch, post };
};
