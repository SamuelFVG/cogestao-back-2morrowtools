const ToolModel = require("../Models/ToolModel");

class ToolController {
  async create(req, res) {
    try {
      const tool = await IAModel.create(req.body);

      const { descrição, ...newTool } = usuario.toObject();

      return res.status(200).json(newTool);
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }

  async read(req, res) {
    try {
      const tools = await IAModel.find();
      return res.status(200).json(tools);
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const toolFounded = await IAModel.findById(id);
      if (!toolFounded) {
        return res.status(404).json({ message: "Ferramenta não encontrada" });
      }
      await toolFounded.deleteOne();
      return res.status(200).json({ mensagem: "Ferramenta deletada com sucesso!" });
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const toolFounded = await IAModel.findById(id);

      if (!toolFounded) return res.status(404).json({ message: "Ferramenta não encontrada" });

      const ferramenta = await toolFounded.set(req.body).save();

      return res.status(200).json(toolFounded);
    } catch (error) {
      res.status(500).json({ message: "Deu ruim aqui!", error: error.message });
    }
  }
}

module.exports = new ToolController();
