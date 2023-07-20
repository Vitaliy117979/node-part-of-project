const User = require("../../models/user");

const addProductToShoppingList = async (req, res) => {
  const { _id: owner } = req.user;
  const { measure, _id: id, newId } = req.body;
  const newItemExists = req.user.shoppingList.find((item) => item.newId === newId);
  if (newItemExists) {
  res.status(409).json("This product has already been added to your shopping list");
  }
  const ingredients = await User.findByIdAndUpdate(
    owner,
    {
      $push: { shoppingList: { id, newId, measure } },
    },
    { new: true }
  ).populate("shoppingList.id")

  res.status(201).json(req.body);
};

module.exports = addProductToShoppingList;
