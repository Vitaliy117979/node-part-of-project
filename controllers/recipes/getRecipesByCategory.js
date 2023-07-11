const Recipe = require("../../models/recipe");
const { Ingredient } = require("../../models/ingredient");

async function getRecipesByCategory(req, res) {
  const { category } = req.params;

  const { limit = 8 } = req.query;
  const list = await Recipe.find(
    { title: { $regex: category, $options: "i" } },
    null,
    { limit }
  ).populate("ingredients.id");
  if (list.length === 0) {
    res.status(400).json({ massage: "This category does not exist" });
  }
  console.log(list);
  res.status(200).json(list);
}
module.exports = getRecipesByCategory;
