const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IASchema = new mongoose.Schema({
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

const IAModel = mongoose.model("IAtool", IASchema);
module.exports = IAModel;
