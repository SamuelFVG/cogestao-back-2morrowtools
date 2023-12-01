const mongoose = require("mongoose");
const { string } = require("zod");

const Schema = mongoose.Schema;

const ToolSchema = new mongoose.Schema({
  nome: {
    type: String,
    unique: true,
  },
  description: String,
  ImageUrl: String,
});

const ToolModel = mongoose.model("tool", ToolSchema);
module.exports = ToolModel;
