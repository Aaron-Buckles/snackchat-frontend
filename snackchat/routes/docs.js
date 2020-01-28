const path = require("path");
const express = require("express");
const router = express.Router();

function sendDoc(res, doc) {
  res.sendFile(path.join(__dirname, `../docs/${doc}.html`));
}

// Index
router.get("/", (req, res) => sendDoc(res, "docs-index"));

router.get("/reviews", (req, res) => sendDoc(res, "reviews"));

module.exports = router;
