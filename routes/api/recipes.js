const express = require("express");
const { authenticate } = require("../../middleware");
const router = express.Router();
const {
  getRecipesList,
  getCategoryList,
  getRecipesByCategory,
  getRecipesById,
  getRecipesForMainPage
} = require("../../controllers");

router.use(authenticate);

router.get("/", getRecipesList);
router.get("/category/:category", getRecipesByCategory);
router.get("/main-page", getRecipesForMainPage);
router.get("/category-list", getCategoryList);
router.get("/:id", getRecipesById);

module.exports = router;
