const IAModel = require("../Models/IAModel");

class IAController {
  async create(req, res) {
    try{
      const modelo = await IAModel.create(req.body);
    return res.status(200).json(modelo);
    } catch (error) {
      res.status(500).json({"messagem" : "Nome de ferramenta duplicado"});
    }
  }

  async read(req, res) {
    const modelos = await IAModel.find();
    return res.status(200).json(modelos);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await IAModel.findByIdAndDelete(id);

    return res.status(200).json({"mensagem": "Usuario deletado com sucesso!"});
  }

  async update(req, res) {
    const { id } = req.params;

    const modelo = await IAModel.findByIdAndUpdate(id, req.body, {new:true});
    return res.status(200).json(modelo);
  }
}

module.exports = new IAController();
