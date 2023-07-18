const express = require("express");
const { authenticate } = require("../../middleware");
const { searchByTitle,  searchByIngredient, searchIngredients} = require("../../controllers");

const router = express.Router();
router.use(authenticate);

router.get("/", searchByTitle);
router.get("/byIngredients", searchByIngredient);
router.get("/ingredients", searchIngredients);



module.exports = router;
