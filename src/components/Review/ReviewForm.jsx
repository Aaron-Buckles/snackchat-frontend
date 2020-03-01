import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Input from "../common/Input";
import FoodTags from "../common/FoodTags";

import tagService from "../../services/tagService";
import reviewService from "../../services/reviewService";


function ReviewForm(props) {

  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setTags(await tagService.getAllTags());
    };
    fetchData();
  }, []);

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

  const handleReviewSubmitted = async (e) => {
    e.preventDefault();
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
      await reviewService.postReview(formData);
      props.history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={handleReviewSubmitted}>
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
        minLength="5"
        maxLength="500"
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
