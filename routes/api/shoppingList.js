const express = require("express");
const router = express.Router();
const { authenticate, validate, isValidId } = require("../../middleware");
const { getShoppingList, addProductToShoppingList, deleteProductFromShoppingList } = require("../../controllers");
const { productSchema } = require("../../models/product");

router.use(authenticate);

router.get(
        "/", 
        getShoppingList
);

router.post(
        "/", 
        validate(productSchema), 
        addProductToShoppingList
);

router.delete(
        "/:id",
        isValidId,
        deleteProductFromShoppingList
);

module.exports = router;