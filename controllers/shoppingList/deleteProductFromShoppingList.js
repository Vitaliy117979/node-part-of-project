const User = require("../../models/user");
const { HttpError } = require("../../helpers");

const deleteProductFromShoppingList = async (req, res) => {
  const { id: newId } = req.params;
  const { _id: user } = req.user;

  try {
    const result = await User.findByIdAndUpdate(user, { $pull: { shoppingList: { newId } } }, { new: true});

    if (!result) {
      throw HttpError(404, "Product not found in Shopping List");
    }

    res.json(result);
  } catch (error) {
    console.error("Error deleting product from Shopping List:", error);
    res.status(error.statusCode || 500).json({ error: error.message || "Internal Server Error" });
  }
};

module.exports = deleteProductFromShoppingList;