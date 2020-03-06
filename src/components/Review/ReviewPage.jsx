import React from "react";
import ReviewForm from "./ReviewForm";

// Interface
import { Loader } from "../common/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <h1 className="brand-text text-center">
        <FontAwesomeIcon icon="clipboard" /> Submit a Review
      </h1>
      <hr />
      <ReviewForm />
    </>
  );
}
