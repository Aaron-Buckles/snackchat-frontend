const { Review, validateReview } = require("../models/review");

getReviews = async (req, res) => {
  // TODO: This is where we got to do the "NEXT GEN SEARCH"
  await Review.find({}, (err, reviews) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    if (!reviews.length) {
      return res.status(404).json({ success: false, err: "Review not found" });
    }
    return res.status(200).json({ success: true, data: reviews });
  }).catch(err => console.log(err));
};

getReviewById = async (req, res) => {
  await Review.findOne({ _id: req.params.id }, (err, review) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }

    return res.status(200).json({ success: true, data: review });
  }).catch(err => console.log(err));
};

createReview = async (req, res) => {
  const { error } = validateReview(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const review = new Review({
    title: req.body.title,
    description: req.body.description,
    starRating: req.body.starRating,
    reviewImage: req.file.path
  });

  try {
    await review.save();
    res.status(201).send({
      success: true,
      id: review._id,
      message: "Review successfully created!"
    });
  } catch (err) {
    res.status(500).send({ err });
  }
};

updateReview = async (req, res) => {
  const { error } = validateReview(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const review = await Review.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
      starRating: req.body.starRating,
      reviewImage: req.file.path
    });

    if (!review)
      return res.status(404).send({ success: false, err: "Review not found" });

    res.status(200).send({
      success: true,
      id: review._id,
      message: "Review successfully updated!"
    });
  } catch (err) {
    res.status(500).send({ err });
  }
};

deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndRemove(req.params.id);

    if (!review)
      res.status(404).send({ success: false, err: "Review not found" });

    res.status(200).send({
      success: true,
      id: review._id,
      message: "Review successfully deleted!"
    });
  } catch (err) {
    res.status(500).send({ err });
  }
};

module.exports = {
  getReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview
};
