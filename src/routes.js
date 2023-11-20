const { Router } = require("express");
const IAController = require("./Controllers/IAController");
const IAValidator = require("./Validators/IAValidator");

const routes = Router();

routes.post("/IA", IAValidator.create, IAController.create);
routes.get("/IA/", IAController.read);
routes.delete("/IA/:id", IAValidator.destroy, IAController.destroy);
routes.put("/IA/:id", IAValidator.update, IAController.update);

module.exports = routes;
