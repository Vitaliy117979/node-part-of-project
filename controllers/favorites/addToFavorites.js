const User = require("../../models/user");
const Recipe = require("../../models/recipe");
// const Ingredients = require("../../models/ingredient");
const { HttpError } = require("../../helpers");
const addToFavorites = async (req, res, next) => {
  const recipeId = req.body._id.$oid;
  const userId = req.user._id;
  console.log(recipeId);
  try {
    const user = await User.findByIdAndUpdate(userId, {
      $addToSet: { favorites: recipeId },
    });
    // console.log(user);
    if (user.favorites.includes(recipeId)) {
      HttpError(409, "Recipe already added to favorites");
    }
    if (user) {
      await Recipe.findByIdAndUpdate(
        recipeId, { $inc: { popularity: 1 } } );

      res
        .status(200)
        .json({ message: "Recipe added to favorites successfully" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { addToFavorites };
