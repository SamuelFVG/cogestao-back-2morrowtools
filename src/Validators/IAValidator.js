const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");
const { default: mongoose } = require("mongoose");

const create = validateRequest({
  body: z.object({
    nome: z.string({ required_error: "O nome é obrigatório" }),
    link: z.string({ required_error: "O link é obrigatório" }).url("O link é inválido"),
    descricao: z.string({ required_error: "A descrição é obrigatória" }),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O id não é válido"),
  }),
});

const update = validateRequest({
  body: z.object({
    nome: z.string().optional(),
    link: z.string().optional(),
    descricao: z.string().optional(),
  }),
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O id não é válido"),
  }),
});

module.exports = {
  create,
  destroy,
  update,
};
