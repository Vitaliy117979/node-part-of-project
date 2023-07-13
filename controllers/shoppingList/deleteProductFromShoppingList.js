const { Product } = require("../../models/product");
const { HttpError } = require("../../helpers");

const deleteProductFromShoppingList = async (req, res) => {
        const { _id: userId } = req.user;
        const { id: productId} = req.params;

        const result = await Product.findByIdAndRemove (
                { user: userId },
                { _id: productId}
        );

        if (!result) {
                throw HttpError(404, "Product not found in Shopping List");
        }

        res.json({message: "Product delete successfully from Shopping List"});
};

module.exports = deleteProductFromShoppingList ;