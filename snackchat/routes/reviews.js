const express = require("express");
const router = express.Router();

const { Review } = require("../models/review");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/", (req, res) => {
  createReview(req, res);
});

async function createReview(req, res) {
  const review = new Review({
    title: req.body.title,
    description: req.body.description,
    starRating: req.body.starRating
  });

  try {
    await review.save();
    res.status(201).json({
      message: "Created review successfully",
      createdReview: review
    });
  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
}

module.exports = router;
