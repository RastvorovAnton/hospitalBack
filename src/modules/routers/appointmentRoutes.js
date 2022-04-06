const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  getAllAppointments
} = require("../controllers/appointmentController.js");

router.get("/allAppointments", getAllAppointments);

module.exports = router;