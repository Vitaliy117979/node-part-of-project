const { Schema, model } = require("mongoose");

const ingredientSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Ingredient = model("Ingredient", ingredientSchema);

module.exports = {
  Ingredient
};



