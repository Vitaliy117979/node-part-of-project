const express = require("express");
const { authenticate } = require("../../middleware");
const { searchByTitle,  searchByIngredient, searchIngredients} = require("../../controllers");

const router = express.Router();

router.get("/", authenticate, searchByTitle);
router.get("/byIngredients", authenticate, searchByIngredient);
router.get("/ingredients", authenticate, searchIngredients);



module.exports = router;
