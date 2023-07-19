const Joi = require("joi");

const subscrTypes = ["subscribe", "unsubscribe"];

const updateSubscriptionSchema = Joi.object().keys({
  subscription: Joi.string()
    .valid(...subscrTypes)
    .required(),
  email: Joi.string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .required()
    .messages({
      "string.base": "The email must be a string.",
      "any.required": "The email field is required.",
      "string.empty": "The email must not be empty",
      "string.pattern.base": "The email must be in format test@gmail.com.",
    }),
});

module.exports = { updateSubscriptionSchema };
