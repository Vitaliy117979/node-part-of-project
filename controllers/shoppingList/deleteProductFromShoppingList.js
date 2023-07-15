const  Product  = require("../../models/product");
const { HttpError } = require("../../helpers");

const deleteProductFromShoppingList = async (req, res) => {
  const { _id: owner } = req.user;
  const { id: _id } = req.params;

  const result = await Product.findByIdAndRemove({ _id, owner   });

  if (!result) {
    throw HttpError(404, "Product not found in Shopping List");
  }

  res.json({ message: "Product delete successfully from Shopping List" });
};

module.exports = deleteProductFromShoppingList;
