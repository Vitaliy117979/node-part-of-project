const Joi = require("joi");

const buyIngredientSchema = Joi.object({
  _id: Joi.string().required(),
  newId: Joi.string().length(48).required(),
  name: Joi.string().required(),
  desc: Joi.string().required(),
  img: Joi.string().allow(''),
  measure: Joi.string().required(), 
});

module.exports = buyIngredientSchema;
