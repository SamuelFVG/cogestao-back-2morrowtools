const toolModel = require("../Models/ToolModel");

class ToolController {
  async create(req, res) {
    const tool = await toolModel.create(req.body);
    return res.status(200).json(tool);
  }

  async read(req, res) {
    const tools = await toolModel.find();
    return res.status(200).json(tools);
  }

  async destroy(req, res) {
    const { id } = req.params
    await toolModel.findByIdAndDelete(id);
    return res.status(200).json({ "mensagem": "Ferramenta deletada com sucesso." });
  }

  async update(req, res) {
    const { id } = req.params
    const tool = toolModel.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(tool);
  }
}

module.exports = new ToolController();
