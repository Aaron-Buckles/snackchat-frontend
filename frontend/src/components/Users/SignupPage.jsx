import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import SignupForm from "./SignupForm";
import userService from "./../../services/userService";

function SignupPage({ history }) {
  const handleUserSubmitted = async user => {
    try {
      const res = await userService.postUser(user);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Jumbotron>
        <h1 className="header">Signup!</h1>
      </Jumbotron>

      <SignupForm onUserSubmitted={handleUserSubmitted} />
    </>
  );
}

export default SignupPage;
