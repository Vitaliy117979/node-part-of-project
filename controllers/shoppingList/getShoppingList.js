const  {Ingredient}  = require("../../models/ingredient");
const User = require("../../models/user")
const getShoppingList = async (req, res) => {
  const { _id: owner } = req.user;

  const products = await User.findById( owner).select('shoppingList').populate("shoppingList.id")
  console.log(products.shoppingList);
  res.json(products.shoppingList);
};

module.exports = getShoppingList;
