const Joi = require("joi");

const buyIngredientSchema = Joi.object({
  _id: Joi.string().required(),
  newId: Joi.string().length(24).required(),
  name: Joi.string().required(),
  desc: Joi.string().required(),
  img: Joi.string(),
  measure: Joi.string().required(), 
});

module.exports = buyIngredientSchema;
