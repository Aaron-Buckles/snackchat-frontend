import React from "react";
import SubmitPost from "../Submit/SubmitPost"
import Jumbotron from "react-bootstrap/Jumbotron";
import Navigation from "../Navigation";

function BusinessPage() {
  return (
    <>
      <Navigation />
      <Jumbotron>
        <h1 className="header">This is the business page</h1>
      </Jumbotron>
    </>
  )
}

export default BusinessPage;
