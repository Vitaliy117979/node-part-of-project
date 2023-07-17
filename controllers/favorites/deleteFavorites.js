const User = require("../../models/user");
const HttpError = require("../../helpers/HttpError");

const deleteFavorites = async (req, res, next) => {
  const { recipeId } = req.params;
  const userId = req.user._id;
  console.log(recipeId);

  try {
    const user = await User.findById(userId);
    if (!user) {
      throw HttpError(401, "User not found");
    }

    if (!user.favorites.includes(recipeId)) {
      throw HttpError(404, "Recipe not found in favorites");
    }

    user.favorites.pull(recipeId);
    await user.save();

    res
      .status(200)
      .json({ message: "Recipe removed from favorites successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { deleteFavorites };
