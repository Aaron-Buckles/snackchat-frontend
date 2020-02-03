const crypto = require("crypto");
const path = require("path");
const express = require("express");
const router = express.Router();

// Multer
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      crypto.randomBytes(25).toString("hex") + path.extname(file.originalname)
    );
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else cb(new Error("The image must be either jpeg or png"));
};
const upload = multer({ storage, fileFilter });

const { Review } = require("../models/review");

// Routes
router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/", upload.single("reviewImage"), (req, res) => {
  createReview(req, res);
});

async function createReview(req, res) {
  const review = new Review({
    title: req.body.title,
    description: req.body.description,
    starRating: req.body.starRating,
    reviewImage: req.file.path
  });

  try {
    await review.save();
    res.status(201).send({
      message: "Created review successfully"
    });
  } catch (err) {
    res.status(500).send({ err });
  }
}

module.exports = router;
