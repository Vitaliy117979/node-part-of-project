const User = require("../../models/user");
const Recipe = require("../../models/recipe");
const { Ingredient } = require("../../models/ingredient");

const getFavorites = async (req, res, next) => {
  const userId = req.user._id;
  const favoritesArray = req.user.favorites;

  const result = await Recipe.find({ _id: { $in: favoritesArray } }).populate(
    "ingredients.id"
  );
  if (result.length === 0) {
    return res.status(404).json({ message: "You don't have any favorite recipes yet"}); 
   }
  res.status(200).json(result);
};

module.exports = { getFavorites };
