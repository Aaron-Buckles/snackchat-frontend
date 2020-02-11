import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Input from "../common/Input";
import FoodTags from "../common/FoodTags";

function ReviewForm({ onReviewSubmitted, tags }) {
  const [review, setReview] = useState({
    title: "",
    description: "",
    starRating: ""
  });
  const [selectedTags, setSelectedTags] = useState([]);
  const [reviewImage, setReviewImage] = useState("");
  const [filename, setFilename] = useState("Choose file...");

  const onChange = e => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const onTagSelect = (value, e) => {
    e.preventDefault();
    setSelectedTags(value);
  };

  const onFileChange = e => {
    const file = e.target.files[0];
    setReviewImage(file);
    setFilename(file.name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    onReviewSubmitted(review, reviewImage, selectedTags);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        name="title"
        label="Title"
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
        placeholder="Enter a description"
        onChange={onChange}
        required
      />

      <Input
        type="number"
        name="starRating"
        label="Rating"
        min="0"
        max="5"
        placeholder="Rating from 0 to 5"
        onChange={onChange}
        required
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

      <Button type="submit" variant="primary" className="btn-block">
        Post
      </Button>
    </Form>
  );
}

export default ReviewForm;
