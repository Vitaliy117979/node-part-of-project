const express = require("express");
const { authenticate } = require("../../middleware");
const router = express.Router();

const {getListOfIngredients, } = require('../../controllers');

router.get("/list", authenticate, getListOfIngredients);


module.exports = router;