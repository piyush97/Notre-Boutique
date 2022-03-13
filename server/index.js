const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
