const Recipe = require("../../models/recipe");
const { Ingredient } = require("../../models/ingredient");
const searchByIngredient = async (req, res, next) => {
  const keyword = req.query.keyword;
  const {page = 1, limit = 8} = req.query;
  const skip = (page - 1) * limit;
  if (!keyword) {
    return res.status(404).json({ message: "No ingredient name specified" });
  }

  const ingredient = await Ingredient.find({
    name: { $regex: `^${keyword}`, $options: "i" },
  });

  if (ingredient) {
    const ingredientIds = ingredient.map((item) => item._id);
    const recipes = await Recipe.find(
      {
        "ingredients.id": { $in: ingredientIds }, 
      },
      null,
      { skip, limit }
      ).populate("ingredients.id");
      
      console.log("ingredient",recipes);
    res.status(200).json(
        recipes 
    );
  } else {
    res
      .status(200)
      .json({ message: "No recipes found for the specified ingredient" });
  }
};

module.exports = { searchByIngredient };
