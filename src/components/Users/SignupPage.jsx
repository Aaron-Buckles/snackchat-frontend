import React from "react";
import SignupForm from "./SignupForm";

// Hooks
import { useTags } from "../../customHooks/use-tags";

export default function SignupPage() {
  const tags = useTags();

  return (
    <>
      <h1 className="brand-text text-center">Signup</h1>
      <hr />
      <SignupForm tags={tags} />
    </>
  );
}
