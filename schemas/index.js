const {
  createContact,
  updateContact,
  updateFavoriteSchema,
} = require("./contacts");

const { registerSchema, loginSchema, updateUserSchema } = require("./users");

const { updateSubscriptionSchema } = require("./subscribe")

module.exports = {
  createContact,
  updateContact,
  updateFavoriteSchema,
  registerSchema,
  loginSchema,
  updateUserSchema,
  updateSubscriptionSchema
};
