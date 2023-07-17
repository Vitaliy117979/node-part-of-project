const User = require("../../models/user");
const HttpError = require("../../helpers/HttpError");

const addToFavorites = async (req, res, next) => {
  const recipeId = req.body._id.$oid;
  const userId = req.user._id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      throw HttpError(401, "User not found");
    }

    if (user.favorites.includes(recipeId)) {
      throw HttpError(409, "Recipe already added to favorites");
    }

    await User.findByIdAndUpdate(userId, {
      $addToSet: { favorites: recipeId },
    });

    res.status(200).json({ message: "Recipe added to favorites successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { addToFavorites };
