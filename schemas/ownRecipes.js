const Joi = require("joi");

const ownRecipeSchema = Joi.object({
  title: Joi.string().required(),
  category: Joi.string()
    .valid(
      "Beef",
      "Breakfast",
      "Chicken",
      "Dessert",
      "Goat",
      "Lamb",
      "Miscellaneous",
      "Pasta",
      "Pork",
      "Seafood",
      "Side",
      "Starter",
      "Vegan",
      "Vegetarian"
    )
    .required(),
  area: Joi.string(),
  instructions: Joi.string().required(),
  description: Joi.string().required(),
  time: Joi.string().required(),
  ingredients: Joi.array()
    .items(
      Joi.object({
        id: Joi.string().required(),
        measure: Joi.string().allow("").optional(),
      })
    )
    .required(),
  thumb: Joi.string(),
  preview: Joi.string().required(),
  youtube: Joi.string(),
  tags: Joi.array().items(Joi.string()),
  popularity: Joi.number(),
});

module.exports = ownRecipeSchema;
