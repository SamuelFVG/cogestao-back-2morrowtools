//O routes é o "cérebro" das requisições
//Ele é o responsável por encaminhar cada requisição a uma função no controller e a um validator, dependendo da reuquisição

const { Router } = require("express");
const IAController = require("./Controllers/IAController");
const IAValidator = require("./Validators/IAValidator");

const routes = Router();

routes.post("/IA", IAValidator.create, IAController.create);
routes.get("/IA/", IAController.read);
//colocar o :id para pegar as coisas depois da / como id
routes.put("/IA/:id", IAValidator.update, IAController.update);

module.exports = routes;
