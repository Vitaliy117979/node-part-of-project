const User = require("../../models/user");
const Recipe = require("../../models/recipe");
const addToFavorites = async (req, res, next) => {
  const recipeId = req.body._id
  const userId = req.user._id;
  // console.log(recipeId);
  try {
    const user = await User.findByIdAndUpdate(userId, {
      $addToSet: { favorites: recipeId },
    });
    // console.log(user);
    if (user.favorites.includes(recipeId)) {
      
    return  res.status(409).json({ message: "Recipe is already added to your favorites" });
    }
    if (user) {
      await Recipe.findByIdAndUpdate(recipeId, { $inc: { popularity: 1 } });

      res
        .status(200)
        .json({ message: "Recipe added to favorites successfully" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { addToFavorites };
