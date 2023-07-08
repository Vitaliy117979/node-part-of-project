const Joi = require("joi");

const registerSchema = Joi.object().keys({
  email: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
  password: Joi.string().min(8).required(),
  name: Joi.string().min(2).required(),
});

const loginSchema = Joi.object().keys({
  email: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
  password: Joi.string().min(8).required(),
});

const updateUserSchema = Joi.object().keys({
  name: Joi.string().min(2).required(),
});

module.exports = { registerSchema, loginSchema, updateUserSchema };
