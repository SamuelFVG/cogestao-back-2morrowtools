const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ToolSchema = new mongoose.Schema({
  nome: {
    type: String,
    unique: true,
  },
  imagem: {
    type: String,
    unique: true,
  },
  descrição: {
    type: String,
    unique: true,
  },
});

const ToolModel = mongoose.model("IAtool", ToolSchema);
module.exports = ToolModel;
