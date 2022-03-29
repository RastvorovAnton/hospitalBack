const User = require("../../db/models/user/index.js");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { secret } = require("./config");

const generateTrueToken = (_id) => {
  const payload = {
    id: _id,
  };

  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

module.exports.getAllUsers = (req, res) => {
  User.find().then((result) => {
    res.send({
      data: result,
    });
  });
};

module.exports.createNewUser = async (req, res) => {
  if (req.body) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Error with registration" });
    }

    const { body } = req;
    if (body.hasOwnProperty("email") && body.hasOwnProperty("password")) {
      const { email, password } = body;
      const candidate = await User.findOne({
        email,
      });
      if (candidate) {
        return res.status(400).json({
          message: "Пользователь с такой почтой уже существует",
        });
      }
      const hashPass = bcrypt.hashSync(password, 4);
      const user = new User({ email, password: hashPass });
      user.save().then(async (result) => {
        const trueUser = await User.findOne({ email });
        const token = generateTrueToken(trueUser._id);
        res.send(token);
      });
    } else {
      res.status(422).send("Error! Wrong body");
    }
  } else {
    res.status(422).send("Error! This is not body!");
  }
};