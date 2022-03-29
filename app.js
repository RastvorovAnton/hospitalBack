const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const apiRoutes = require("./src/modules/routers/routes");

app.use(cors());

const uri = "mongodb+srv://magnifico99:28121999A@cluster0.iscaj.mongodb.net/magnifico99?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use("/", apiRoutes);

app.listen(8000, () => {
  console.log("8000 port is listening");
});