import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";
import { useRequireAuth } from "../../customHooks/use-requireAuth";
import { Loader } from "../common/Loader";

function ReviewPage(props) {
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

export default ReviewPage;
