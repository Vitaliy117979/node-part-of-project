const express = require("express");
const { authenticate, validate } = require("../../middleware");
const { updateSubscription } = require("../../controllers");
const router = express.Router();
const schemas = require("../../schemas");

router.patch(
  "/",
  authenticate,
  validate(schemas.updateSubscriptionSchema),
  updateSubscription
);

module.exports = router;
