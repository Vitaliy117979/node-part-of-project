const User = require("../../models/user");
const Recipe = require("../../models/recipe");

const deleteFavorites = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const recipeId = req.params.recipeId;
if (req.user.favorites.length === 0) {
 return res.status(400).json({ message: "The recipe has already been removed from favorites"}); 
}
    const user = await User.findByIdAndUpdate(
      userId,
      { $pull: { favorites: recipeId } },
      { new: true }
    );
    
    await Recipe.findByIdAndUpdate(recipeId, { $inc: { popularity: -1 } });

    res.status(200).json({ message: "Recipe removed from favorites successfully", user });
  } catch (error) {
    next(error);
  }
};

module.exports = { deleteFavorites };

