import React from "react";
import SignupForm from "./SignupForm";

// Interface
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Hooks
import { useTags } from "../../customHooks/use-tags";

export default function SignupPage() {
  const tags = useTags();

  return (
    <>
      <h1 className="brand-text text-center">
        <FontAwesomeIcon icon="user-plus" /> Signup
      </h1>
      <hr />
      <SignupForm tags={tags} />
    </>
  );
}
