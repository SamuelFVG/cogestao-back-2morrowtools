const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ToolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
    unique: true,
  },
});

const ToolModel = mongoose.model("IAtool", ToolSchema);
module.exports = ToolModel;
