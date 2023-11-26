const { Router } = require("express");
const IAController = require("./Controllers/IAController");
const IAValidator = require("./Validators/IAValidator");

const routes = Router();

routes.post("/ferramentas", IAValidator.create, IAController.create);
routes.get("/ferramentar/", IAController.read);
routes.delete("/ferramentas/:id", IAValidator.destroy, IAController.destroy);
routes.put("/ferramentas/:id", IAValidator.update, IAController.update);

module.exports = routes;
