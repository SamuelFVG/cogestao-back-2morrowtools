const { Router } = require("express");
const ToolController = require("../Controllers/ToolController");
const ToolValidator = require("./Validators/ToolValidator");

const routes = Router();

routes.post("/Tool", ToolValidator.create, ToolController.create);
routes.get("/Tool/", ToolController.read);
routes.delete("/Tool/:id", ToolValidator.destroy, ToolController.destroy);
routes.put("/Tool/:id", ToolValidator.update, ToolController.update);

module.exports = routes;
