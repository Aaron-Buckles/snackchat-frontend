import React from "react";
import api from "../../api"

import Jumbotron from "react-bootstrap/Jumbotron";
import Navigation from "../Navigation";

import SubmitPost from "./SubmitPost"

function SubmitPage(props) {

  async function handleAddPost(newPost) {
    console.log(newPost)
    await api.insertReview(newPost)
    // setPosts(prevPosts => [...prevPosts, newPost]);
    props.history.push("/")
  }

  return (
    <>
      <Navigation />
      <Jumbotron>
        <h1 className="header">This is the submit page</h1>
      </Jumbotron>

      <SubmitPost onAdd={handleAddPost} />
    </>
  )
}

export default SubmitPage;
