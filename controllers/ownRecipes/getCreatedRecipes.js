const Recipe = require("../../models/recipe");

const getCreatedRecipes = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const recipes = await Recipe.find({ createdBy: userId });

    if (recipes.length === 0) {
      return res
        .status(404)
        .json({ message: "No recipes have been created yet" });
    }

    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch own recipes" });
  }
};

module.exports = { getCreatedRecipes };
