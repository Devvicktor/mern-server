const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Pet name is required!"],
  },
  type: { type: String, required: [true, "Pet type is required!"] },
  description: {
    type: String,
    required: [true, "Pet description is required!"],
  },
  skills: { type: Array },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Pet", PetSchema);
