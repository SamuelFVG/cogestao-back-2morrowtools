const mongoose = require("mongoose");

async function startDB() {
  await mongoose.connect(
    "mongodb+srv://zelucaspomps15:kfEZlhEaI28qaeI2@cluster0.awlctkf.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("DB conectado!");
}

module.exports = startDB;
