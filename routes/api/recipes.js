const express = require("express");
const { authenticate,} = require("../../middleware");
const router = express.Router();
const {getRecipesList} = require("../../controllers")

router.use(authenticate);

router.get("/", getRecipesList );

module.exports = router;