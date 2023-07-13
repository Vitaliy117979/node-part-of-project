const Recipe = require("../../models/recipe");
const { Ingredient } = require("../../models/ingredient");

const createRecipes = async (req, res, next) => {
  const recipeData = req.body;
  console.log(recipeData);
};

module.exports = { createRecipes };
