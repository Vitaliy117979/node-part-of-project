const User = require("../../models/user");
const { HttpError } = require("../../helpers");

const deleteProductFromShoppingList = async (req, res) => {
  const { id: newId } = req.params;
  const { _id: user } = req.user;


    const result = await User.findByIdAndUpdate(user, { $pull: { shoppingList: { newId } } }, { new: true});

    if (!result) {
      throw HttpError(404, "Product not found in Shopping List");
    }

    res.status(201).json("The product has been successfully removed");

};

module.exports = deleteProductFromShoppingList;