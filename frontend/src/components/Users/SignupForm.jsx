import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Input from "../common/Input";

function SignupForm({ onUserSubmitted }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    onUserSubmitted(user);
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

      <Button type="submit" variant="primary" className="btn-block">
        Signup
      </Button>
    </Form>
  );
}

export default SignupForm;
