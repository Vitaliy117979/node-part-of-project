const express = require("express");
const { authenticate, upload } = require("../../middleware");
const router = express.Router();
const {
  createRecipes,
  getCreatedRecipes,
  deleteOwnRecipes,
} = require("../../controllers");

router.use(authenticate);

router.post("/", upload.single("preview"), createRecipes);
router.get("/", getCreatedRecipes);
router.delete("/:recipeId", deleteOwnRecipes);

module.exports = router;
