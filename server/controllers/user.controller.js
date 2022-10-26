const User = require("../models/user.model");
const showAllUser = (req, res) => {
  User.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const showOneUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const editExistingUser = (req, res) => {
  User.updateOne({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const createNewUser = (req, res) => {
  User.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const deleteExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  showAllUser,
  showOneUser,
  editExistingUser,
  createNewUser,
  deleteExistingUser,
};
