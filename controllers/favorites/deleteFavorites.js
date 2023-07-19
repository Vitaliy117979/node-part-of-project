const User = require("../../models/user");
const Recipe = require("../../models/recipe");

const deleteFavorites = async (req, res, next) => {

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
    
    const recipe = await Recipe.findById(recipeId);
    if (recipe && recipe.popularity > 0) {
      console.log(1);
      await Recipe.findByIdAndUpdate(recipeId, { $inc: { popularity: -1 } });
    }


    res.status(201).json({ message: "Recipe removed from favorites successfully" });

};

module.exports = { deleteFavorites };

