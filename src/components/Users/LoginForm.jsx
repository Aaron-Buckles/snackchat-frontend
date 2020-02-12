import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Input from "../common/Input";

function LoginForm({ onUserLoggedIn }) {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const onChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    onUserLoggedIn(user);
  };

  return (
    <Form onSubmit={onSubmit}>
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
        placeholder="Enter your password"
        onChange={onChange}
        required
      />

      <Button type="submit" variant="primary" className="btn-block">
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;
