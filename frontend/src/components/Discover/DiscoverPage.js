import React, { useState, useEffect } from "react";
import api from "../../api"

import Jumbotron from "react-bootstrap/Jumbotron";

import Gallery from "./Gallery";
import FoodTags from "./FoodTags";
import SubmitPost from "../Submit/SubmitPost";
import defaultPosts from "../../data";
import Navigation from "../Navigation";

function DiscoverPage() {
  const [posts, setPosts] = useState([]);

  const [selectedTags, setSelectedTags] = useState([]);
  
  useEffect( () => {
      const fetchData = async () => {
      const reviews = await api.getAllReviews()
      setPosts(reviews.data.data);
    };
    fetchData();
  }, [])


  function handleTagSelect(value, event) {
    setSelectedTags(value);
    event.preventDefault();
  }


  return (
    <>
      <Navigation />
      <Jumbotron>
        <h1 className="header">Snackchat!</h1>
      </Jumbotron>

      {/* <SubmitPost onAdd={handleAddPost} /> */}

      <hr />

      <FoodTags onTagSelect={handleTagSelect} />
      <Gallery filterTags={selectedTags} posts={posts} />
    </>
  );
}

export default DiscoverPage;
