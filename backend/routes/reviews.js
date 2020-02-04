const crypto = require("crypto");
const path = require("path");
const express = require("express");
const router = express.Router();
const ReviewController = require("../controllers/reviews-controller");

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

router.get("/", ReviewController.getReviews);
router.get("/:id", ReviewController.getReviewById);
router.post("/", upload.single("reviewImage"), ReviewController.createReview);
router.put("/:id", upload.single("reviewImage"), ReviewController.updateReview);
router.delete("/:id", ReviewController.deleteReview);

module.exports = router;
