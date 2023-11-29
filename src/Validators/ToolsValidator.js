const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");
const { default: mongoose } = require("mongoose");

const create = validateRequest({
  body: z.object({
    name : z.string( {required_error: "Nome incorreto"} ),
    description: z.string( {required_error: "Descrição inválida"} ),
    imageUrl : z.string( {required_error: "Link inválido"} )
  })
});

const destroy = validateRequest({
  params: z.object({
    id:z.custom(mongoose.isValidObjectId, "O id inserido não é válido")
  })
});

const update = validateRequest({
  params: z.object({
    id:z.custom(mongoose.isValidObjectId, "O id inserido não é válido")
  }),
  body: z.object({
    name : z.string().optional(),
    description: z.string().optional(),
    imageurl : z.string().optional()
  })
});

module.exports = {
  create,
  destroy,
  update,
};
