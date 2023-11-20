const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IASchema = new mongoose.Schema({});

const IAModel = mongoose.model("IA", IASchema);
module.exports = IAModel;
