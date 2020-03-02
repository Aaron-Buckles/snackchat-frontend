import React, { useState, useEffect } from "react";
import SignupForm from "./SignupForm";
import tagService from "../../services/tagService";

import { useAuth } from "../../customHooks/use-auth";
import { useTags } from "../../customHooks/use-tags";

function SignupPage(props) {
  const tags = useTags();

  return (
    <>
      <h1 className="brand-text text-center">Signup</h1>
      <hr />
      <SignupForm tags={tags} />
    </>
  );
}

export default SignupPage;
