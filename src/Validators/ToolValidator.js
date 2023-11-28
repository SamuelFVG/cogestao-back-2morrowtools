const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");
const { default: mongoose } = require("mongoose");

const create = validateRequest({
    body: z.object({
        nome: z.string({ required_error: "O nome é obrigatório." }),
        linkImagem: z.string({ required_error: "A url da imagem é obrigatória." }),
        descricao: z.string({ required_error: "A descrição é obrigatória." })
    }),
});

const destroy = validateRequest({
    params: z.object({
      id: z.custom(mongoose.isValidObjectId, "Id inválido.")
    }),
});

const update = validateRequest({
    body: z.object({
      nome: z.string().optional(),
      linkImagem: z.string().optional(),
      descricao: z.string().optional()
    }),
    params: z.object({
      id: z.custom(mongoose.isValidObjectId, "Id inválido.")
    })
});

module.exports = {
  create,
  destroy,
  update,
};
