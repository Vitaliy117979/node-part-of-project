const  Product  = require("../../models/product");
const { HttpError } = require("../../helpers");

const deleteProductFromShoppingList = async (req, res) => {
  const { id: newId } = req.params;
  const {_id: owner} = req.user
  const result = await Product.deleteOne({newId, owner});
  console.log(result);

  if (result.deletedCount === 0) {
    throw HttpError(404, "Product not found in Shopping List");
  }

  res.json({ message: "Product delete successfully from Shopping List" });
};


module.exports = deleteProductFromShoppingList;
