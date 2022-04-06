const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  getAllAppointments,
  createAppointment
} = require("../controllers/appointmentController.js");

router.get("/allAppointments", getAllAppointments);
router.post("/createAppointment", createAppointment);

module.exports = router;