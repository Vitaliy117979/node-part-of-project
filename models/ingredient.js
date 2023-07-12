const { Schema, model } = require("mongoose");

const ingredientSchema = Schema(
  {
    _id: {
      type: String,
      required: true,
    },
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

const Ingredient = model("ingredient", ingredientSchema);

module.exports = { 
  Ingredient,
};
