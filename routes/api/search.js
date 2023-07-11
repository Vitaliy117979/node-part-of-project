const express = require("express");
const { authenticate } = require("../../middleware");
const { searchByTitle } = require("../../controllers");
const router = express.Router();

router.get("/", authenticate, searchByTitle);

module.exports = router;
