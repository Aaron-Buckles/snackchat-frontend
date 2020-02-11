const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users-controller");

router.get("/", (req, res) => {
  UserController.getAllUserNames(req, res);
});

router.post("/signup", (req, res) => {
  bcrypt.hash(req.body.password, 15, (err, hash) => {
    if (err) {
      return res.status(500).send({ err });
    } else {
      UserController.createUser(hash, req, res);
    }
  });
});

router.delete("/:userId", (req, res) => {
  UserController.deleteUser(req, res);
});

module.exports = router;
