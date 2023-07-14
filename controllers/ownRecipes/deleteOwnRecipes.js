const Recipe = require("../../models/recipe");
const HttpError = require("../../helpers/HttpError");

deleteOwnRecipes = async (req, res, next) => {
  try {
    const recipeId = req.params.recipeId;

    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      throw new HttpError(404, "Recipe not found");
    }

    if (recipe.createdBy.toString() !== req.user._id.toString()) {
      throw new HttpError(403, "You are not authorized to delete this recipe");
    }

    await Recipe.findByIdAndDelete(recipeId);

    res.json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete recipe" });
  }
};

module.exports = { deleteOwnRecipes };
