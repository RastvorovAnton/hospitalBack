const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config()

const apiRoutes = require("./src/modules/routers/routes");
const appointmentRoutes = require("./src/modules/routers/appointmentRoutes.js");

app.use(cors());

const uri = process.env.uri;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use("/", apiRoutes);
app.use("/", appointmentRoutes);

app.listen(8000, () => {
  console.log("8000 port is listening");
});