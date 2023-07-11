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
    ingredients: {
        type: [
          {
            id: {
              type: Schema.Types.ObjectId,
              ref: "ingredient",
            },
            measure: {
              type: String,
              required: true,
            },
          },
        ],
        required: true,
      },

  },
  { timestamps: true }
);

recipeSchema.post("save", handleMongooseError);
const Recipe = model("recipe", recipeSchema);

module.exports = Recipe;
