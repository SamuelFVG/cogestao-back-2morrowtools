//Valitadors são responsáveis por fazer a validação inicial das requisições.
//Eles verificam os dados enviados ao back, vendo se eles estão presentes ou não

const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");
const { default: mongoose, mongo } = require("mongoose");

const create = validateRequest({
  //dentro do validateRequest, define-se a estrutura desejada
  body: z.object({
    name: z.string({ required_error: "Digite o nome" }),
    imageUrl: z.string({ required_error: "Digite o nome" }),
  }),
});

const update = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O ID de ferramenta não é válido"),
  }),
  body: z.object({
    name: z.string({ required_error: "Digite o nome" }).optional(), //optional pq nada é obrigatório no edit (além do id)
    imageUrl: z.string({ required_error: "Digite o nome" }).optional(),
  }),
});

module.exports = {
  create,
  update,
};
