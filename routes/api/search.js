const express = require("express");
const { authenticate } = require("../../middleware");
const { searchByTitle,  searchByIngredient} = require("../../controllers");

const router = express.Router();

router.get("/", authenticate, searchByTitle);
router.get("/ingredients", authenticate, searchByIngredient);



module.exports = router;
