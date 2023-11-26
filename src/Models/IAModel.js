const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IASchema = new mongoose.Schema({
 nome: String,
 link: String,
 descricao: String
});

const IAModel = mongoose.model("IA", IASchema);
module.exports = IAModel;
