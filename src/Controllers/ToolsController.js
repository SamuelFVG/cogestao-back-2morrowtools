const ToolsModel = require("../Models/ToolsModel");

class ToolsController {
  async create(req, res) {
    try {
      const Tools = await ToolsModel.create(req.body);
      return res.status(200).json(Tools);
    } catch (error) {
      res.status(500).json({ message: "Não deu nada!", error: error.message });
    }
  }

  async read(req, res) {
    try {
      const Tools = await ToolsModel.find();
      return res.status(200).json(Tools);
    } catch (error) {
      res.status(500).json({ message: "Nothing worked", error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const Tools = await ToolsModel.findById(id);
      if (!Tools)
        return res.status(404).json({ message: "The id was not found!", error: error.message });
      await Tools.deleteOne();
      return res.status(200).json({ message: "Deleted with success!" });
    } catch (error) {
      res.status(500).json({ message: "The delete went wrong", error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const FoundTools = await ToolsModel.findById(id);
      if (!FoundTools)
        return res
          .status(404)
          .json({ message: "Do not found any valid ID!", error: error.message });
      await FoundTools.set(req.body).save();
      return res.status(200).json(FoundTools);
    } catch (error) {
      res.status(500).json({ message: "The update went wrong", error: error.message });
    }
  }
}

module.exports = new ToolsController();
