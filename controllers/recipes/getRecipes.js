const Recipe = require("../../models/recipe");
const {Ingredient} = require("../../models/ingredient"); 
// імпортувати в файл модель Ingredient
console.log(Recipe);
async function getRecipesList(req, res) {
  // console.log(req.user);
  const list = await Recipe.find().populate("ingredients.id");
  console.log(list);
  res.status(200).json(list);
}
module.exports = getRecipesList;
