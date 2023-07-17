const Recipe = require("../models/recipe");

const addToFavorites = async (req, res, next) => {
  try {
    const { recipeId } = req.body;
    const userId = req.user._id;

    await Recipe.findByIdAndUpdate(recipeId, {
      $addToSet: { favorites: userId },
    });

    res.status(200).json({ message: "Recipe added to favorites successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add recipe to favorites" });
  }
};
