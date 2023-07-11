const express = require("express");
const { authenticate,} = require("../../middleware");
const router = express.Router();
const {getRecipesList, getCategoryList, getRecipesByCategory,} = require("../../controllers")

router.use(authenticate);

router.get("/", getRecipesList );
router.get("/category-list", getCategoryList );
router.get("/:category", getRecipesByCategory );


module.exports = router;