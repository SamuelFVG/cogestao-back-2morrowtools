const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");
const { default: mongoose, Mongoose } = require("mongoose");
// nome: String,
// description: String,
// ImageUrl: String,
const create = validateRequest({
  body: z.object({
    nome: z.string({ required_error: "o nome é obrigatorio" }),
    description: z.string({ required_error: "a descrição é obrigatoria" }),
    ImageUrl: z
      .string({ required_error: "a imagem é obrigatoria" })
      .url({ required_error: "o link é invalido" }),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O id nao é valido"),
  }),
});

const update = validateRequest({
  body: z.object({
    nome: z.string().optional(),
    description: z.string().optional(),
    ImageUrl: z.string().url({ required_error: "o link é invalido" }).optional(),
  }),
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "O id nao é valido"),
  }),
});

module.exports = {
  create,
  destroy,
  update,
};
