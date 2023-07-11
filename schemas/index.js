const { registerSchema, loginSchema, updateUserSchema } = require("./users");

const { updateSubscriptionSchema } = require("./subscribe");

module.exports = {
  registerSchema,
  loginSchema,
  updateUserSchema,
  updateSubscriptionSchema,
};
