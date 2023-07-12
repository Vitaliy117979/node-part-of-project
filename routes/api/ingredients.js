const express = require("express");
const { authenticate } = require("../../middleware");
const router = express.Router();

const {getIngredients} = require('../../controllers');

router.get("/", authenticate, getIngredients);

module.exports = router;