import React from "react";
import reviewService from "../../services/reviewService";

import Jumbotron from "react-bootstrap/Jumbotron";
import Navigation from "../Navigation";

import ReviewForm from "./ReviewForm";

function SubmitPage({ history }) {
  const handleReviewSubmitted = async (review, reviewImage) => {
    const formData = new FormData();
    formData.append("title", review.title);
    formData.append("description", review.description);
    formData.append("starRating", review.starRating);
    formData.append("reviewImage", reviewImage);

    try {
      const res = await reviewService.postReview(formData);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navigation />
      <Jumbotron>
        <h1 className="header">This is the submit page</h1>
      </Jumbotron>

      <ReviewForm onReviewSubmitted={handleReviewSubmitted} />
    </>
  );
}

export default SubmitPage;
