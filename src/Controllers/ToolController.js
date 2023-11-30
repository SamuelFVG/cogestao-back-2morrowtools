const ToolModel = require("../Models/ToolModel");

class ToolController {
  async create(req, res) {
    const tool = ToolModel.create(req.body);

    return res.status(200).json(tool);
  }

  async read(req, res) {}

  async destroy(req, res) {}

  async update(req, res) {}
}

module.exports = new ToolController();
