const User = require("../../db/models/user/index.js");
require("dotenv").config()

module.exports.getAllUsers = (req, res) => {
  User.find().then((result) => {
    res.send({
      data: result,
    });
  });
};
