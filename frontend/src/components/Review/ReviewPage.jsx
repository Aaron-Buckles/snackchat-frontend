import React, { useState, useEffect } from "react";
import reviewService from "../../services/reviewService";
import tagService from "../../services/tagService";
import Jumbotron from "react-bootstrap/Jumbotron";
import ReviewForm from "./ReviewForm";

function SubmitPage({ history }) {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setTags(await tagService.getAllTags());
    };
    fetchData();
  }, []);

  const handleReviewSubmitted = async (review, reviewImage, selectedTags) => {
    const formData = new FormData();
    formData.append("title", review.title);
    formData.append("description", review.description);
    formData.append("starRating", review.starRating);
    formData.append("reviewImage", reviewImage);

    const tagIds = selectedTags.map(tag => tag._id);
    for (let i = 0; i < tagIds.length; i++) {
      formData.append(`tags[${i}]`, tagIds[i]);
    }

    try {
      const res = await reviewService.postReview(formData);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Jumbotron>
        <h1 className="header">Submit a Review!</h1>
      </Jumbotron>

      <ReviewForm onReviewSubmitted={handleReviewSubmitted} tags={tags} />
    </>
  );
}

export default SubmitPage;
