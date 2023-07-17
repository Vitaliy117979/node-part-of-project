const express = require("express");
const { authenticate } = require("../../middleware");
const router = express.Router();
const {
  addToFavorites,
  getFavorites,
  deleteFavorites,
} = require("../../controllers");

router.use(authenticate);

router.post("/", addToFavorites);
router.get("/", getFavorites);
router.delete("/:recipeId", deleteFavorites);

module.exports = router;
