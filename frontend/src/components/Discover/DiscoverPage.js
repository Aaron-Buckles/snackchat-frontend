import React, { useState, useEffect } from "react";
import reviewService from "../../services/reviewService";

import Jumbotron from "react-bootstrap/Jumbotron";

import Gallery from "./Gallery";
import FoodTags from "./FoodTags";
import Navigation from "../Navigation";

function DiscoverPage() {
  const [reviews, setReviews] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setReviews(await reviewService.getAllReviews());
    };
    fetchData();
  }, []);

  const handleTagSelect = (value, event) => {
    setSelectedTags(value);
    event.preventDefault();
  };

  return (
    <>
      <Navigation />
      <Jumbotron>
        <h1 className="header">Snackchat!</h1>
      </Jumbotron>

      <hr />

      <FoodTags onTagSelect={handleTagSelect} />
      <Gallery filterTags={selectedTags} reviews={reviews} />
    </>
  );
}

export default DiscoverPage;
