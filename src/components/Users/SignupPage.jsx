import React, { useState, useEffect } from "react";
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
      <h1 className="brand-text text-center">Signup</h1>
      <hr />
      <SignupForm onUserSubmitted={handleUserSubmitted} />
    </>
  );
}

export default SignupPage;
