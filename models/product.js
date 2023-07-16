const { Schema, model } = require("mongoose");

const productSchema = Schema(
  {
    newId: {
      type: String,
      required: true,
    },
    recipeId: {
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
    },
    measure: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = model("product", productSchema);

module.exports = Product;
