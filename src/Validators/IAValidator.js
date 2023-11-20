const { z } = require("zod");
const { validateRequest } = require("zod-express-middleware");
const { default: mongoose } = require("mongoose");

const create = validateRequest({});

const destroy = validateRequest({});

const update = validateRequest({});

module.exports = {
  create,
  destroy,
  update,
};
