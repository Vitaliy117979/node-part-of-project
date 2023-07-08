const express = require("express");
const updateSubscriptionSchema = require("../../schemas/subscribe");
const { authenticate, validate } = require("../../middleware");
const { updateSubscription } = require("../../controllers");
const router = express.Router();


router.patch(
        "/", 
        authenticate, 
        validate(updateSubscriptionSchema), 
        updateSubscription
);

module.exports = router;