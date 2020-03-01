import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Input from "../common/Input";
import FoodTags from "../common/FoodTags";

function SignupForm(props) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    preferences: []
  });

  const [selectedTags, setSelectedTags] = useState([]);

  const onTagSelect = (value, e) => {
    e.preventDefault();
    setSelectedTags(value);
  };

  const onChange = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    userInfo.preferences = selectedTags;
    props.onUserSubmitted(userInfo);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        name="name"
        label="Name"
        placeholder="Enter your name"
        onChange={onChange}
        required
      />

      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="your@email.com"
        onChange={onChange}
        required
      />
      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="Create a secure password"
        onChange={onChange}
        required
      />

      <Form.Label>Choose your preferences</Form.Label>
      <FoodTags onTagSelect={onTagSelect} tags={props.tags} />

      <Button type="submit" variant="primary" className="btn-block">
        Register
      </Button>
    </Form>
  );
}

export default SignupForm;
