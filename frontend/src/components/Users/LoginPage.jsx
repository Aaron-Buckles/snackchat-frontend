import React from "react";
import { Link } from "react-router-dom";
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
      <Link className="text-center" to="/signup">
        <p className="py-2">Don't have an account? Signup!</p>
      </Link>
    </>
  );
}

export default LoginPage;
