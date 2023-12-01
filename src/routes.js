const { Router } = require("express");
const ToolsController = require("./Controllers/ToolsController");
const ToolsValidator = require("./Validators/ToolsValidator");

const routes = Router();

routes.post("/Tools", ToolsValidator.create, ToolsController.create);
routes.get("/Tools/", ToolsController.read);
routes.delete("/Tools/:id", ToolsValidator.destroy, ToolsController.destroy);
routes.put("/Tools/:id", ToolsValidator.update, ToolsController.update);

module.exports = routes;
