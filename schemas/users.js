const Joi = require("joi");

const registerSchema = Joi.object().keys({
  email: Joi.string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .required()
    .empty(false)
    .messages({
      "string.base": "The email must be a string.",
      "any.required": "The email field is required.",
      "string.empty": "The email must not be empty",
      "string.pattern.base": "The email must be in format test@gmail.com.",
    }),
  password: Joi.string().min(8).required().empty(false).messages({
    "string.base": "The password must be a string.",
    "any.required": "The password field is required.",
    "string.empty": "The password must not be empty",
  }),
  name: Joi.string().min(2).required().empty(false).messages({
    "string.base": "The name must be a string.",
    "any.required": "The name field is required.",
    "string.empty": "The name must not be empty",
    "string.min": "The password must be not less 2 symbols.",
  }),
  subscription: Joi.string(),
});

const loginSchema = Joi.object().keys({
  email: Joi.string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .empty(false)
    .required()
    .messages({
      "string.base": "The email must be a string.",
      "any.required": "The email field is required.",
      "string.empty": "The email must not be empty",
      "string.pattern.base": "The email must be in format test@gmail.com.",
    }),
  password: Joi.string().min(8).empty(false).required().messages({
    "string.base": "The password must be a string.",
    "any.required": "The password field is required.",
    "string.empty": "The password must not be empty",
    "string.min": "The password must be not less 8 symbols.",
  }),
});

const updateUserSchema = Joi.object().keys({
  name: Joi.string().min(2).empty(false).required().messages({
    "string.base": "The name must be a string.",
    "any.required": "The name field is required.",
    "string.empty": "The name must not be empty",
  }),
});

module.exports = { registerSchema, loginSchema, updateUserSchema };
