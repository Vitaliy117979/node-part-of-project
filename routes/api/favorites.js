const express = require("express");
const { authenticate } = require("../../middleware");
const router = express.Router();
const { addToFavorites, getFavorites } = require("../../controllers");

router.use(authenticate);

router.post("/", addToFavorites);
router.get("/", getFavorites);

module.exports = router;
