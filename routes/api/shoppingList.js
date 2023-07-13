const express = require("express");
const router = express.Router();
const { authenticate, validate, isValidId } = require("../../middleware");
const { getShoppingList, addItemToShoppingList, deleteItemFromShoppingList } = require("../../controllers");
const { productSchema } = require("../../models/product");

router.use(authenticate);

router.get(
        "/", 
        getShoppingList
);

router.post(
        "/", 
        validate(productSchema), 
        addItemToShoppingList
);

router.delete(
        "/:id",
        isValidId,
        deleteItemFromShoppingList
);

module.exports = router;