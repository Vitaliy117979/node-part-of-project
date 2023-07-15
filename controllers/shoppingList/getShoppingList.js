const  Product  = require("../../models/product");

const getShoppingList = async (req, res) => {
  const { _id: owner } = req.user;

  const products = await Product.find({ owner }, "-updateAt -createAt");
  res.json(products);
};

module.exports = getShoppingList;
