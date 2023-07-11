const Recipe = require("../../models/recipe");
const Category = require("../../models/category");

const categoriesList = [
  "Beef",
  "Breakfast",
  "Chicken",
  "Dessert",
  "Goat",
  "Lamb",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian",
];

async function getRecipesByCategory(req, res) {
  const { category } = req.params;
  const found = categoriesList.includes(category);
  if (!found) {
    res.status(400).json({ massage: "This category does not exist" });
  }
  const { page = 1, limit = 8 } = req.query;
  const skip = (page - 1) * limit;

  const list = await Recipe.find({ category }, null, { skip, limit });
  if (list.length === 0) {
    res.status(400).json({ massage: "This category does not exist" });
  }
  console.log(list);
  res.status(200).json(list);
}
module.exports = getRecipesByCategory;
