const { Product } = require("../../models/product");

const addProductToShoppingList = async (req, res) => {
        const { _id } = req.user;

        const productsArray = req.body.products.map((product) => {
                product.user = _id;
                return product;
        });

        await Product.create(productsArray);

        res.status(201).json({message: "Products added to Shopping List"});
};

module.exports = addProductToShoppingList;