//Models são os arquivos que definem as tabelas do backend
//Nele, você pode definir os campo e coisas relacionadas
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//define todos os campos
const IASchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, //campo obrigatório da entidade IA
    unique: true, //o nome de cada ferramenta deve ser único
  },
  imageUrl: {
    type: String,
  },
});

const IAModel = mongoose.model("capacitacaoTool", IASchema);
module.exports = IAModel;
