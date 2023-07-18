const User = require("../../models/user");
const Recipe = require("../../models/recipe");

const addToFavorites = async (req, res, next) => {
  const recipeId = req.body._id;
  const userId = req.user._id;
  // console.log(recipeId);
  if (req.user.favorites.includes(recipeId)) {
    return res
      .status(409)
      .json({ message: "Recipe is already added to your favorites" });
  }
  const user = await User.findByIdAndUpdate(userId, {
    $addToSet: { favorites: recipeId },
  }, { new: true });
 console.log(user);
  if (user) {
    await Recipe.findByIdAndUpdate(recipeId, { $inc: { popularity: 1 } });

    const favoritesArray = user.favorites;
    const result = await Recipe.find({ _id: { $in: favoritesArray } }).populate(
      "ingredients.id"
    )
    res.status(201).json(result);
  }
};

module.exports = { addToFavorites };