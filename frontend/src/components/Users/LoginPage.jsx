import React from "react";
import LoginForm from "./LoginForm";
import userService from "./../../services/userService";

function LoginPage({ history, onLogin }) {
  const handleUserLoggedIn = async user => {
    try {
      const res = await userService.loginUser(user);
      onLogin(res);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="brand-text text-center">Login</h1>
      <hr />
      <LoginForm onUserLoggedIn={handleUserLoggedIn} />
    </>
  );
}

export default LoginPage;
