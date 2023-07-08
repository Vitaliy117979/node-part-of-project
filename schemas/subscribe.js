const Joi = require("joi");

const subscrTypes = ["subscribe", "unsubscribe"];

const updateSubscriptionSchema = Joi.object().keys({
        subscription: Joi.string().valid(...subscrTypes).required(),
        email: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
});

module.exports = { updateSubscriptionSchema };