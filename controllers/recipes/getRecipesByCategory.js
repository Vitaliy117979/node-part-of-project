const Recipe = require("../../models/recipe");
const { Ingredient } = require("../../models/ingredient");

async function getRecipesByCategory(req, res) {
  const { category } = req.params;
  console.log(req.params);
  if (category === "") {
    return res.status(400).json({ message: "Category cannot be empty" });
  }
  const { limit = 8 } = req.query;
  const list = await Recipe.find(
    { category: { $regex: category, $options: "i" } },
    null,
    { limit }
    ).populate("ingredients.id");
  if (list.length === 0) {
   return res.status(400).json({ massage: "This category does not exist" });
  }

  res.status(200).json(list);
}
module.exports = getRecipesByCategory;
