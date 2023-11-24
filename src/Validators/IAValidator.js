const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");
const { default: mongoose } = require("mongoose");

const create = validateRequest({
  body: z.object({
    nome: z.string({ required_error: "O nome é obrigatório" }),
    urlImagem: z.string({ require_error: "A url da imagem é obrigatória" }),
    descricao: z.string({ require_error: "A descrição é obrigatória" }),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O Id não é válido"),
  }),
});

const update = validateRequest({
  body: z.object({
    nome: z.string({ required_error: "O nome é obrigatório" }),
    urlImagem: z.string({ require_error: "A url da imagem é obrigatória" }),
    descricao: z.string({ require_error: "A descrição é obrigatória" }),
  }),
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O Id não é válido"),
  }),
});

module.exports = {
  create,
  destroy,
  update,
};
