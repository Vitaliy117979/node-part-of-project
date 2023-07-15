const express = require("express");
const router = express.Router();
const schemas = require("../../schemas");

const { authenticate, validate, isValidId } = require("../../middleware");
const {
  getShoppingList,
  addProductToShoppingList,
  deleteProductFromShoppingList,
} = require("../../controllers");

router.use(authenticate);

router.get("/", getShoppingList);

router.post("/", validate(schemas.buyIngredientSchema), addProductToShoppingList);

router.delete("/:id", isValidId, deleteProductFromShoppingList);

module.exports = router;
