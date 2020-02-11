const { User, validateUser } = require("../models/user");

getAllUserNames = async (req, res) => {
  try {
    const userNames = await User.find({}).select("name");
    if (userNames.length === 0)
      return res.status(404).send({ err: "No Users found" });
    return res.status(200).send({ userNames });
  } catch (err) {
    return res.status(500).send({ err });
  }
};

createUser = async (passwordHash, req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send({ err: error.details[0].message });

  const user = new User({
    name: req.body.name,
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
};

deleteUser = async (req, res) => {
  try {
    await User.remove({ _id: req.params.userId });
    res.status(200).send({
      message: "Deleted user successfully"
    });
  } catch (err) {
    res.status(200).send({ err });
  }
};

module.exports = {
  getAllUserNames,
  createUser,
  deleteUser
};
