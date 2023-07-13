const { Schema, model } = require("mongoose");

const ingredientSchema = Schema(
  {
    // _id: {
    //   type: String,
    //   required: true,
    // },
    // Якщо в модель додати _id, постає проблема, при запитах за рецептами в інгредієнтах:  
    // "ingredients": [
    //   {
    //     "id": null,
    //     "measure": "1 cups"
    // },
    // {
    //     "id": null,
    //     "measure": "1"
    // },]
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
