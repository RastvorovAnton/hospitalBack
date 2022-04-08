const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const {
  getAllAppointments,
  createAppointment,
  deleteAppointment,
  editAppointment
} = require("../controllers/appointmentController.js");

router.get("/allAppointments", getAllAppointments);
router.post("/createAppointment", createAppointment);
router.delete("/deleteAppointment", deleteAppointment);
router.patch("/editAppointment", editAppointment); 

module.exports = router;