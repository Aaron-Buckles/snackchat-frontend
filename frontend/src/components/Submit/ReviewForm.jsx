import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Input from "../common/Input";
import reviewService from "../../services/reviewService";

function ReviewForm({ onReviewSubmitted }) {
  // const [review, setReview] = useState({
  //   title: "",
  //   description: "",
  //   reviewImage: ""
  // });

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setReview({ reviewImage: fileInput.current.files[0] });
  //   onAdd(review);
  // };

  // const handleChange = event => {
  //   const { name, value } = event.target;

  //   setReview(prevReview => {
  //     return {
  //       ...prevReview,
  //       [name]: value
  //     };
  //   });
  // };

  const [review, setReview] = useState({
    title: "",
    description: "",
    starRating: ""
  });
  const [reviewImage, setReviewImage] = useState("");
  const [filename, setFilename] = useState("Choose file...");

  const onChange = e => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value }); //SDfasfa
  };

  const onFileChange = e => {
    const file = e.target.files[0];
    setReviewImage(file);
    setFilename(file.name);
  };

  const onSubmit = async e => {
    e.preventDefault();
    onReviewSubmitted(review, reviewImage);

    // const formData = new FormData();
    // console.log(reviewImage);
    // formData.append("reviewImage", reviewImage);
    // formData.append("title", "test2");
    // formData.append("description", "test description");
    // formData.append("starRating", 3);

    // try {
    //   const res = await reviewService.postReview(formData);
    //   history.push("/");
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <form onSubmit={onSubmit}>
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
      <div className="custom-file mb-4">
        <input
          type="file"
          className="custom-file-input"
          id="reviewImageFile"
          onChange={onFileChange}
        />
        <label className="custom-file-label" htmlFor="reviewImageFile">
          {filename}
        </label>
      </div>

      <Button type="submit" variant="primary">
        Post
      </Button>
    </form>
  );
}

export default ReviewForm;
