//create mongodb connection
require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connected to mongodb at ${process.env.DB_URL}`);
  })
  .catch((err) => {
    console.log("error in connecting to mongodb", err);
  });
