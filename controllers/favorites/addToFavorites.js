const User = require("../../models/user");
const HttpError = require("../../helpers/HttpError");
const Recipe = require("../../models/recipe");

const addToFavorites = async (req, res, next) => {
  const { recipeId } = req.params;
  const userId = req.user._id;

  try {
    const user = await User.findByIdAndUpdate(userId, {
      $addToSet: { favorites: recipeId },
    });

    res.status(200).json({ message: "Recipe added to favorites successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { addToFavorites };
