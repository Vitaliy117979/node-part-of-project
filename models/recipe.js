const { Schema, model } = require("mongoose");
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
      required: true,
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
          ref: "ingredient",
        },
        measure: { type: String },
      },
    ],
    thumb: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
    youtube: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    popularity: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

const Recipe = model("recipe", recipeSchema);

module.exports = Recipe
