const User = require("../../models/user");

const addProductToShoppingList = async (req, res) => {
  const { _id: owner } = req.user;
  const { measure, _id: id, newId } = req.body;
  console.log(req.body);
  const ingredients = await User.findByIdAndUpdate(
    owner,
    {
      $push: { shoppingList: { id, newId, measure } },
    },
    { new: true }
  );

  res.status(201).json(ingredients);
};

module.exports = addProductToShoppingList;
