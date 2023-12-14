const ToolModel = require("../Models/ToolModel");

class ToolController {
  async create(req, res) {
    try {
      const tool = await ToolModel.create(req.body);

      return res.status(200).json({ ...tool, message: "Ferramenta criada com sucesso!" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Não foi possível criar a ferramenta!", error: error.message });
    }
  }

  async read(req, res) {
    try {
      const tools = await ToolModel.find();
      return res.status(200).json(tools);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Não foi possível encontrar as ferramentas!", error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const toolFounded = await ToolModel.findById(id);
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

      const toolFounded = await ToolModel.findByIdAnsUpdate(id, req.body);

      if (!toolFounded) return res.status(404).json({ message: "Ferramenta não encontrada!" });

      const updateTool = await toolFounded.set(req.body).save();

      return res.status(200).json({ ...updateTool, message: "Ferramenta atualizada com sucesso!" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Não foi possível atualizar a ferramenta!", error: error.message });
    }
  }
}

module.exports = new ToolController();
