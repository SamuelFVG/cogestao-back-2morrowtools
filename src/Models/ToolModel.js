const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ToolSchema = new mongoose.Schema({
  nome: String,
  description: String,
  ImageUrl: String,
});

const ToolModel = mongoose.model("tool", ToolSchema);
module.exports = ToolModel;
