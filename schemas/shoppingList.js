const Joi = require("joi");

const buyIngredientSchema = Joi.object({
  name: Joi.string().required(),
  desc: Joi.string().required(),
  img: Joi.string().required(),
  measure:Joi.string().required(),
});

module.exports = buyIngredientSchema;
