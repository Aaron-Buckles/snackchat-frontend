import React, { useState } from "react";
import FoodTags from "../common/FoodTags";

// Services
import reviewService from "../../services/reviewService";
import awsService from "./../../services/awsService";

// Interface
import Form from "react-bootstrap/Form";
import { ButtonWithLoading, Input, Select } from "../common/inputElements";
import { StarRating } from "../common/StarRating";
import { toast } from "react-toastify";

// Hooks
import { useBusinesses } from "../../customHooks/use-businesses";
import { useSubmit } from "../../customHooks/use-submit";
import { useTags } from "../../customHooks/use-tags";
import { useRouter } from "../../customHooks/use-router";

export default function ReviewForm() {
  const businesses = useBusinesses();
  const tags = useTags();
  const { push, query } = useRouter();

  const [review, setReview] = useState({
    title: "",
    description: "",
    businessId: query.businessId || "",
    starRating: 1,
    reviewImageURL: "",
    tags: []
  });
  const [filename, setFilename] = useState("Choose file...");

  const onChange = e => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const onStarRatingChange = (newStarRating, name) => {
    setReview({ ...review, starRating: newStarRating });
  };

  const onTagSelect = (tags, e) => {
    setReview({ ...review, tags });
  };

  const onFileChange = e => {
    const file = e.target.files[0];
    if (file == null) {
      return;
    }
    awsService.getSignedRequest(file, url =>
      setReview({ ...review, reviewImageURL: url })
    );
    setFilename(file.name);
  };

  const onReviewSubmitted = useSubmit(async e => {
    e.preventDefault();
    try {
      await reviewService.postReview(review);
      push("/");
    } catch (err) {
      toast.error(err.response.data.err);
    }
  });

  return (
    <Form onSubmit={onReviewSubmitted.exec}>
      <Input
        type="text"
        name="title"
        label="Title"
        minLength="5"
        maxLength="50"
        placeholder="Enter a title"
        onChange={onChange}
        required
      >
        <p className="text-muted">Be creative!</p>
      </Input>

      <Input
        type="text"
        name="description"
        label="Description"
        as="textarea"
        minLength="5"
        maxLength="500"
        placeholder="Enter a description..."
        onChange={onChange}
        required
      />

      <StarRating
        name="starRating"
        label="Rating"
        rating={review.starRating}
        changeRating={onStarRatingChange}
      />

      <Form.Label>Tags</Form.Label>
      <FoodTags onTagSelect={onTagSelect} tags={tags} />

      <div className="custom-file my-4">
        <input
          type="file"
          accept="image/*"
          className="custom-file-input"
          id="reviewImageFile"
          onChange={onFileChange}
        />
        <label className="custom-file-label" htmlFor="reviewImageFile">
          {filename}
        </label>
      </div>

      <Select
        name="businessId"
        value={review.businessId}
        selectOptions={businesses.list.map(business => {
          return {
            ...business,
            name: `${business.name} at ${business.address} in ${business.city}`
          };
        })}
        label="Business"
        onChange={onChange}
      />

      <ButtonWithLoading
        name="submitReview"
        text="Post"
        type="primary"
        loading={onReviewSubmitted.loading}
        className="btn-block mb-4"
      />
    </Form>
  );
}
