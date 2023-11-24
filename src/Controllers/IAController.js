const IAModel = require("../Models/IAModel");

class IAController {
  async create(req, res) {
    try {
      const ferramenta = await IAModel.create(req.body);

      return res.status(200).json(ferramenta);
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui", error: error.message });
    }
  }

  async read(req, res) {
    try {
      const ferramenta = await IAModel.find();

      return res.status(200).json(ferramenta);
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui", error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      const ferramentaEncontrada = await IAModel.findById(id);

      if (!ferramentaEncontrada)
        return res.status(404).json({ message: "Ferramenta não foi encontrada" });

      await ferramentaEncontrada.deleteOne();
      return res.status(200).json({ mensagem: "Ferramenta deletada com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui", error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const ferramentaEncontrada = await IAModel.findById(id);

      if (!ferramentaEncontrada)
        return res.status(404).json({ message: "Ferramenta não foi encontrada" });

      await ferramentaEncontrada.set(req.body).save();
      return res.status(200).json({ mensagem: "Ferramenta mudada com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui", error: error.message });
    }
  }
}

module.exports = new IAController();
