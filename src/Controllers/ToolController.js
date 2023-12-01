const ToolModel = require("../Models/ToolModel");

class ToolController {
  async create(req, res) {
    try {
      const tool = await ToolModel.create(req.body);

      return res.status(200).json(tool);
    } catch (error) {
      res.status(500).json({ message: "deu ruim aqui", error: error.message });
    }
  }

  async read(req, res) {
    try {
      const tool = await ToolModel.find();

      return res.status(200).json(tool);
    } catch (error) {
      res.status(500).json({ message: "deu ruim aqui", error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;

      await ToolModel.findByIdAndDelete(id);

      return res.status(200).json("mensagem:usuario foi deletado");
    } catch (error) {
      res.status(500).json({ message: "deu ruim aqui", error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      // const ToolEncontrada = await ToolModel.findByIdAndUpdate(id);
      // if (!ToolEncontrada) return res.status(400).json({message:"tool nao encontrada"})
      const tool = await ToolModel.findByIdAndUpdate(id, req.body, { new: true });

      return res.status(200).json(tool);
    } catch (error) {
      res.status(500).json({ message: "deu ruim aqui", error: error.message });
    }
  }
}

module.exports = new ToolController();
