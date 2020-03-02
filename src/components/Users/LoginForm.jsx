import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { ButtonWithLoading, Input } from "../common/inputElements";
import { useSubmit } from "../../customHooks/use-submit";
import { useRouter } from "../../customHooks/use-router";
import { useAuth } from "../../customHooks/use-auth";

export default function LoginForm() {
  const { push } = useRouter();
  const auth = useAuth();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });

  const onChange = e => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const onLogin = useSubmit(async e => {
    e.preventDefault();
    try {
      await auth.signin(loginInfo);
      push("/");
    } catch (err) {
      toast.error("Incorrect username or password");
    }
  });

  return (
    <Form onSubmit={onLogin.exec}>
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

      <ButtonWithLoading
        name="login"
        text="Login"
        type="submit"
        loading={onLogin.loading}
        variant="primary"
        className="btn-block"
      />
    </Form>
  );
}
