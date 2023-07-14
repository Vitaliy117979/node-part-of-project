const  Recipe = require("../../models/recipe");
const {Ingredient} = require("../../models/ingredient"); 

const getRecipesForMainPage = async (req, res) => {
  const { limit = 4 } = req.query;

  const categories = ["Breakfast", "Miscellaneous", "Chicken", "Dessert"];

  const recipes = await Recipe.find({ category: { $in: categories } }).populate("ingredients.id").sort({ popularity: -1 });;

  const recipeData = categories.map((category) => {
    const categoryRecipes = recipes
      .filter((recipe) => recipe.category === category)
      .slice(0, limit);
    return {
      title: category,
      recipes: categoryRecipes,
    };
  });

  res.status(200).json({ recipes: recipeData });
};

module.exports = {getRecipesForMainPage};