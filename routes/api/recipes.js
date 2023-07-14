const express = require("express");
const { authenticate, isValidId } = require("../../middleware");
const router = express.Router();
const {
  getCategoryList,
  getRecipesByCategory,
  getRecipesById,
  getRecipesForMainPage,
  getPopularRecipe,
  createRecipes,
} = require("../../controllers");

router.use(authenticate);

router.get("/popular-recipe", getPopularRecipe);
router.get("/category/:category", getRecipesByCategory);
router.get("/main-page", getRecipesForMainPage);
router.get("/category-list", getCategoryList);
router.get("/:id", isValidId, getRecipesById);

router.post("/", createRecipes);

module.exports = router;
