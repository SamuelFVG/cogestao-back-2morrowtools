const { Router } = require("express");
const ToolController = require("./Controllers/ToolController");
const ToolValidator = require("./Validators/ToolValidator");

const routes = Router();

routes.post("/tool", ToolValidator.create, ToolController.create);
routes.get("/tool/", ToolController.read);
routes.delete("/tool/:id", ToolValidator.destroy, ToolController.destroy);
routes.put("/tool/:id", ToolValidator.update, ToolController.update);

module.exports = routes;
