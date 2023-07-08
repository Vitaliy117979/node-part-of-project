const {
  createContact,
  updateContact,
  updateFavoriteSchema,
} = require("./contacts");

const { registerSchema, loginSchema, updateUserSchema } = require("./users");

module.exports = {
  createContact,
  updateContact,
  updateFavoriteSchema,
  registerSchema,
  loginSchema,
  updateUserSchema
};
