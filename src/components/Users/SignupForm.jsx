import React, { useState } from "react";
import FoodTags from "../common/FoodTags";

// Interface
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { ButtonWithLoading, Input } from "../common/inputElements";

// Hooks
import { useAuth } from "../../customHooks/use-auth";
import { useSubmit } from "../../customHooks/use-submit";
import { useRouter } from "../../customHooks/use-router";

export default function SignupForm({ tags }) {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    preferences: []
  });

  const [selectedTags, setSelectedTags] = useState([]);
  const auth = useAuth();
  const { push } = useRouter();

  const onTagSelect = value => {
    setSelectedTags(value);
  };

  const onChange = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onSignup = useSubmit(async e => {
    e.preventDefault();
    userInfo.preferences = selectedTags;
    try {
      await auth.signup(userInfo);
      toast.success("Account successfully created!");
      push({ pathname: "/login", state: { from: "/signup" } });
    } catch (err) {
      toast.error(err);
    }
  });

  return (
    <Form onSubmit={onSignup.exec}>
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
      <FoodTags onTagSelect={onTagSelect} tags={tags} />

      <ButtonWithLoading
        name="login"
        text="Signup"
        type="primary"
        loading={onSignup.loading}
        className="btn-block"
      />
    </Form>
  );
}
