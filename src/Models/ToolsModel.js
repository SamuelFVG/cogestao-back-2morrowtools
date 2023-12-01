const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ToolsSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  imageUrl: {
    type: String,
  },
  description: {
    type: String,
  },
});

const IAModel = mongoose.model("FerramentasGabriel", ToolsSchema);
module.exports = IAModel;
