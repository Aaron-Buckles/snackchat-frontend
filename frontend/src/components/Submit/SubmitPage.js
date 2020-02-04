import React from "react";
import reviewService from "../../services/reviewService";

import Jumbotron from "react-bootstrap/Jumbotron";
import Navigation from "../Navigation";

import SubmitReview from "./SubmitReview";

function SubmitPage(props) {
  async function handleAddPost(newPost) {
    console.log(newPost);
    await reviewService.postReview(newPost);
    // setPosts(prevPosts => [...prevPosts, newPost]);
    props.history.push("/");
  }

  return (
    <>
      <Navigation />
      <Jumbotron>
        <h1 className="header">This is the submit page</h1>
      </Jumbotron>

      <SubmitReview onAdd={handleAddPost} />
    </>
  );
}

export default SubmitPage;
