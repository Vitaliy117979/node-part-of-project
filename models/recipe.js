const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
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
    thumb: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
    time: {
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
    ingredients: [
        {
          ingredient: {
            type: Schema.Types.ObjectId,
            ref: "ingredient",
            required: true,
          },
          measure: {
            type: String,
            required: true,
          },
        },
      ],
  },
  { timestamps: true }
);

recipeSchema.post("save", handleMongooseError);
const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
