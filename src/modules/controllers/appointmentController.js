const Appointment = require("../../db/models/user/index.js");
require("dotenv").config();
const secret = process.env.secret;
const jwt = require("jsonwebtoken");

module.exports.getAllAppointments = async (req, res) => {
  const { token } = req.headers;
  if (!token) {
    res.status(422).send({ message: "Token not Found!" });
  }
  const currentUser = await jwt.verify(token, secret);
  Appointment.find({ userId: currentUser.id },
    [
      "userName",
      "doctorName",
      "date",
      "complaint",
    ]
    ).then((result) => {
    res.send({ data: result }).catch(() => {
      res.status(420).send("Error");
    });
  });
};