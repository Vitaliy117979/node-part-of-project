const express = require("express");
const { authenticate, isValidId } = require("../../middleware");
const router = express.Router();
const {
  getCategoryList,
  getRecipesByCategory,
  getRecipesById,
  getRecipesForMainPage, getPopularRecipe,
} = require("../../controllers");

router.use(authenticate);

router.get("/popular", getPopularRecipe);
router.get("/category/:category", getRecipesByCategory);
router.get("/main-page", getRecipesForMainPage);
router.get("/category-list", getCategoryList);
router.get("/:id", isValidId, getRecipesById);

module.exports = router;
