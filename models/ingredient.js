
const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");
const ingredientSchema = new Schema(
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
  {  timestamps: true }
);

ingredientSchema.post("save", handleMongooseError)
const Ingredient = model("ingredient", ingredientSchema)
module.exports = Ingredient
