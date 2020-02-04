const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

const { User } = require("../models/user");

router.post("/signup", (req, res) => {
  bcrypt.hash(req.body.password, 15, (err, hash) => {
    if (err) {
      return res.status(500).send({ err });
    } else {
      createUser(hash, req, res);
    }
  });
});

router.delete("/:userId", (req, res) => {
  deleteUser(req, res);
});

async function createUser(passwordHash, req, res) {
  const user = new User({
    email: req.body.email,
    password: passwordHash
  });

  try {
    await user.save();
    res.status(201).send({
      message: "Created user successfully"
    });
  } catch (err) {
    res.status(500).send({ err });
  }
}

async function deleteUser(req, res) {
  try {
    await User.remove({ _id: req.params.userId });
    res.status(200).send({
      message: "Deleted user successfully"
    });
  } catch (err) {
    res.status(200).send({ err });
  }
}

module.exports = router;
