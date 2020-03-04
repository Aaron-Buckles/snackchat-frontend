import React from "react";
import ReviewForm from "./ReviewForm";

// Interface
import { Loader } from "../common/Loader";

// Hooks
import { useRequireAuth } from "../../customHooks/use-requireAuth";

export default function ReviewPage(props) {
  const auth = useRequireAuth();

  console.log("Auth", auth);

  if (!auth) {
    return <Loader />;
  }

  return (
    <>
      <h1 className="brand-text text-center">Submit a Review</h1>
      <hr />
      <ReviewForm />
    </>
  );
}
