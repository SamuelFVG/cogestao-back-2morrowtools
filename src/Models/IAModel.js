const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IASchema = new mongoose.Schema({
  name:{
    type: String,
    unique:true
  },
  imageUrl:String,
  description:String
});

const IAModel = mongoose.model('IA', IASchema);

module.exports = IAModel;
