const { Product } = require("../../models/product");
const { HttpError } = require("../../helpers");


const getShoppingList = async (req, res) => {
        const { _id: userId } = req.user;

        try {
                const products = await Product.find({userId}, "-updateAt -createAt");
                res.json(products);
        } catch (error) {
                throw HttpError (500, error.toString());
        }
};

module.exports = getShoppingList;