const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: [
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
        "Vegetarian",
      ],
      required: true,
    },
    area: {
      type: String,
    },
    instructions: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        _id: false,
        id: {
          type: String,
          ref: "Ingredient",
        },
        measure: { type: String },
      },
    ],
    thumb: {
      type: String,
    },
    preview: {
      type: String,
      required: true,
    },
    youtube: {
      type: String,
    },
    tags: {
      type: [String],
    },
    popularity: {
      type: Number,
    },
    createdBy: {
      type: String,
    },
  },
  { timestamps: true }
);

recipeSchema.post("save", handleMongooseError);

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
