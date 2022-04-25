//create mongodb connection
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/pet_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("error in connecting to mongodb", err);
  });
