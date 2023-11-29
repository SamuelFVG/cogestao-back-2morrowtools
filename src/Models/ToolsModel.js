const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ToolsSchema = new mongoose.Schema({
  name:{
    type: String,
    unique:true
  },
  imageUrl:String,
  description:String
});

const ToolsModel = mongoose.model('Tools', ToolsSchema);

module.exports = ToolsModel;
