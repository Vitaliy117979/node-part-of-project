const express = require("express");
const router = express.Router();
const { authenticate, validate, isValidId } = require("../../middleware");
const { getShoppingList, addItemToShoppingList, deleteItemFromShoppingList } = require("../../controllers");
const schemas = require("../../schemas");

router.get(
        "/", 
        authenticate, 
        getShoppingList
);

router.post(
        "/", 
        authenticate, 
        validate(schemas.shoppingSchema), 
        addItemToShoppingList
);

router.delete(
        "/:id",
        authenticate,
        isValidId,
        deleteItemFromShoppingList
);

module.exports = router;