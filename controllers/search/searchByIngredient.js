const Recipe = require("../../models/recipe");
const { Ingredient } = require("../../models/ingredient");
const mongoose = require("mongoose");
const searchByIngredient = async (req, res, next) => {
  const keyword = req.query.keyword;
  const {page = 1, limit = 8} = req.query;
  const skip = (page - 1) * limit;
  if (!keyword) {
    return res.status(400).json({ message: "No ingredient name specified" });
  }

  const ingredient = await Ingredient.findOne({
    name: { $regex: `^${keyword}`, $options: "i" },
  });

  if (ingredient) {
    const recipes = await Recipe.find({
      ingredients: {
        $elemMatch: {
          id: new mongoose.Types.ObjectId(ingredient.id),
        },
      },
    }, null, {skip, limit}).populate("ingredients.id");

    res.status(200).json({
        keyword,
        ingredient,
        recipes 
    });
  } else {
    res
      .status(200)
      .json({ message: "No recipes found for the specified ingredient" });
  }
};

module.exports = { searchByIngredient };
