const User = require("../../models/user");

const deleteFavorites = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const recipeId = req.params.recipeId;

    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { favorites: recipeId } },
      { new: true }
    );

    res.status(200).json({ message: "Recipe removed from favorites successfully", user });
  } catch (error) {
    next(error);
  }
};

module.exports = { deleteFavorites };

// module.exports = { deleteFavorites };
