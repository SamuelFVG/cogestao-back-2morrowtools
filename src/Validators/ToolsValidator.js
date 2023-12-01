const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");
const { default: mongoose } = require("mongoose");

//Nome da ferramenta
// Link da ferramenta
//Descrição da ferramenta

const create = validateRequest({
  body: z.object({
    nome: z.string({ required_error: "O nome da ferramenta é obrigatória" }),
    link: z.string({ required_error: "O link da imagem é obrigatório!" }),
    descricao: z.string({ required_error: " A descrição é obrigatória!" }),
  }),
});

const destroy = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "Esse ID não existe!"),
  }),
});

const update = validateRequest({
  params: z.object({
    id: z.custom(mongoose.isValidObjectId, "Esse ID não existe!"),
  }),
  body: z.object({
    nome: z.string().optional,
    link: z.string().optional,
    descricao: z.string().optional,
  }),
});

module.exports = {
  create,
  destroy,
  update,
};
