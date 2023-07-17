const Recipe = require("../../models/recipe");
const HttpError = require("../../helpers/HttpError");

const deleteOwnRecipes = async (req, res, next) => {
  const recipeId = req.params.recipeId;
  const recipe = await Recipe.findById(recipeId);
  if (!recipe) {
    return next(HttpError(404, "Recipe not found"));
  }
  if (recipe.createdBy !== req.user._id) {
    throw new HttpError(403, "You are not authorized to delete this recipe");
  }

  const result = await Recipe.findByIdAndDelete(recipeId);

  return res.json({ message: "Recipe deleted successfully" });
};

module.exports = { deleteOwnRecipes };
