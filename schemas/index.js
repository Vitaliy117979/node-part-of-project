const {
  registerSchema,
  loginSchema,
  updateUserSchema,
  ownRecipeSchema,
} = require("./users");

const { updateSubscriptionSchema } = require("./subscribe");
const buyIngredientSchema = require("./shoppingList");

module.exports = {
  ownRecipeSchema,
  registerSchema,
  loginSchema,
  updateUserSchema,
  updateSubscriptionSchema,
  buyIngredientSchema,
};
