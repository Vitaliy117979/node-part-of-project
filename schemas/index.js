const { registerSchema, loginSchema, updateUserSchema } = require("./users");

const { updateSubscriptionSchema } = require("./subscribe");
const buyIngredientSchema = require("./shoppingList")

module.exports = {
  registerSchema,
  loginSchema,
  updateUserSchema,
  updateSubscriptionSchema,
  buyIngredientSchema
};
