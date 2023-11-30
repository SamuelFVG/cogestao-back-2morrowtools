const express = require("express");
const routes = require("./routes");
const cors = require("cors");

require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes);
app.use("*", (req, res) => {
  res.status(404).json({ message: `Rota '${req.baseUrl}' não encontrada.` });
});

module.exports = app;

//kfEZlhEaI28qaeI2
//mongodb+srv://zelucaspomps15:<password>@cluster0.awlctkf.mongodb.net/?retryWrites=true&w=majority
