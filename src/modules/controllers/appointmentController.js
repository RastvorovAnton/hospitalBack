const Appointment = require("../../db/models/appointment/index.js");
require("dotenv").config();
const secret = process.env.secret;
const jwt = require("jsonwebtoken");
module.exports.getAllAppointments = async (req, res) => {
  const { token } = req.headers;

  if (!token) {
    res.status(422).send({ message: "Token not Found!" });
  }

  const currentUser = await jwt.verify(token, secret);
  Appointment.find({ userId: currentUser.id }, [
    "userName",
    "doctorName",
    "date",
    "complaint",
  ]).then((result) => {
    res.send({ data: result });
  });
};

module.exports.createAppointment = async (req, res) => {
  const { token } = req.headers;

  if (!token) {
    return res.status(422).send({ message: "Token not Found!" });
  }

  const currentUser = await jwt.verify(token, secret);
  const body = req.body;

  if (
    body.hasOwnProperty("userName") &&
    body.hasOwnProperty("doctorName") &&
    body.hasOwnProperty("date") &&
    body.hasOwnProperty("complaint")
  ) {
    const { userName, doctorName, date, complaint } = body;
    const appointment = new Appointment({
      userName,
      doctorName,
      date,
      complaint,
      userId: currentUser.id,
    });
    appointment.save().then(() => {
      Appointment.find({ userId: currentUser.id }, [
        "userName",
        "doctorName",
        "date",
        "complaint",
      ]).then((result) => {
        res.send({ data: result });
      });
    });
  } else {
    res.send("Error with body");
  }
};