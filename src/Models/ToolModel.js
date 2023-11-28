const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const toolSchema = new mongoose.Schema({
    nome: String,
    linkImagem: String,
    descricao: String
    
},
    {
        versionKey: false
    }
);

const toolModel = mongoose.model("tools", toolSchema);
module.exports = toolModel;
