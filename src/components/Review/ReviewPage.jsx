import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";

function ReviewPage(props) {


  return (
    <>
      <h1 className="brand-text text-center">Submit a Review</h1>
      <hr />
      <ReviewForm {...props}/>
    </>
  );
}

export default ReviewPage;
