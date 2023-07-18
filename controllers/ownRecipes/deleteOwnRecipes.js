const Recipe = require("../../models/recipe");
const HttpError = require("../../helpers/HttpError");

const deleteOwnRecipes = async (req, res, next) => {
  const recipeId = req.params.recipeId;
  const recipe = await Recipe.findById(recipeId);
  if (!recipe) {
    return next(HttpError(404, "Recipe not found"));
  }
  console.log(recipe.createdBy);
  console.log(req.user._id);

  if (recipe.createdBy.toString() !== req.user._id.toString()) {
    throw HttpError(403, "You are not authorized to delete this recipe");
  }

  const result = await Recipe.findByIdAndDelete(recipeId);

  return res.status(201).json({ message: "Recipe deleted successfully" });
};

module.exports = { deleteOwnRecipes };
