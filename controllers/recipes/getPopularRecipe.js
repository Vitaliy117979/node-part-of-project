const Recipe = require("../../models/recipe");
const { Ingredient } = require("../../models/ingredient");
console.log(Recipe);
async function getPopularRecipe(req, res) {
  const { page = 1, limit = 8 } = req.query;
  const skip = (page - 1) * limit;
  const list = await Recipe.find(null, null, { skip, limit })
    .populate("ingredients.id")
    .sort({ popularity: -1 });
  res.status(200).json(list);
}
module.exports = getPopularRecipe;
