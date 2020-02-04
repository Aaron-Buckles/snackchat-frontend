import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SubmitPost(props) {
  const [post, setPost] = useState({
    title: "",
    description: "",
    image: "",
    tags: ["Vegan"]
  });

  function submit(event) {
    event.preventDefault();
    props.onAdd(post);
    // console.log(post)
    // setPost({
    //   title: "",
    //   description: "",
    //   image: "",
    //   tags: []
    // });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setPost(prevPost => {
      return {
        ...prevPost,
        [name]: value
      };
    });
  }

  return (
    <Form className="w-50 mx-auto mb-4" onSubmit={submit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Post Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a title"
          value={post.title}
          name="title"
          onChange={handleChange}
        />
        <Form.Text className="text-muted">Be creative!</Form.Text>
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter a description"
          value={post.description}
          name="description"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formImage">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="URL"
          value={post.image}
          name="image"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <div className="text-center">
        <Button variant="primary" type="submit">
          Submit Post
        </Button>
      </div>
    </Form>
  );
}

export default SubmitPost;
